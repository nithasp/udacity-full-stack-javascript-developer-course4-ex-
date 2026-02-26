import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  filter,
  switchMap,
  take,
  throwError,
} from 'rxjs';

import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

// ── Module-level state shared across all interceptor invocations ─────────────

/** Whether a refresh request is already in-flight. */
let isRefreshing = false;

/**
 * Emits the new access token once the refresh completes.
 * Requests that arrive while a refresh is in-flight subscribe to this subject
 * and are replayed once a non-null value is emitted.
 */
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Clone the request and attach the Bearer token header. */
function addToken(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });
}

/** Returns `true` for URLs that must NOT carry an access token. */
function isAuthEndpoint(url: string): boolean {
  return (
    url.includes('/auth/login') ||
    url.includes('/auth/register') ||
    url.includes('/auth/refresh')
  );
}

// ── Interceptor ──────────────────────────────────────────────────────────────

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notification = inject(NotificationService);

  // Don't attach tokens to public auth endpoints
  if (isAuthEndpoint(req.url)) {
    return next(req);
  }

  // Attach the access token (if available)
  const token = authService.getAccessToken();
  const authReq = token ? addToken(req, token) : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) {
        return throwError(() => error);
      }

      // ── 401 handling ─────────────────────────────────────────────────────

      const code: string | undefined = error.error?.code;

      // If the token has expired, try to refresh it silently
      if (code === 'token_expired') {
        return handle401Refresh(
          authReq,
          next,
          authService,
          router,
          notification
        );
      }

      // token_invalid or no_token → tampered / missing token,
      // no server record to delete so just wipe localStorage.
      authService.clearSession();
      notification.error('Your session is invalid. Please log in again.');
      router.navigate(['/auth/login']);
      return throwError(() => error);
    })
  );
};

// ── Refresh-and-retry logic ──────────────────────────────────────────────────

function handle401Refresh(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  router: Router,
  notification: NotificationService
) {
  if (!isRefreshing) {
    // ── First 401 triggers the refresh ──────────────────────────────────
    isRefreshing = true;
    refreshTokenSubject.next(null); // block queued requests

    return authService.refreshAccessToken().pipe(
      switchMap((tokens) => {
        isRefreshing = false;
        refreshTokenSubject.next(tokens.accessToken); // unblock queue
        return next(addToken(req, tokens.accessToken));
      }),
      catchError((err) => {
        isRefreshing = false;
        refreshTokenSubject.next(null);
        // The backend already rejected the refresh token (expired / revoked),
        // so just wipe localStorage — no need to hit POST /auth/logout again.
        authService.clearSession();
        notification.error(
          'Your session has expired. Please log in again.'
        );
        router.navigate(['/auth/login']);
        return throwError(() => err);
      })
    );
  }

  // ── Subsequent 401s wait for the first refresh to finish ────────────────
  return refreshTokenSubject.pipe(
    filter((token): token is string => token !== null),
    take(1),
    switchMap((token) => next(addToken(req, token)))
  );
}
