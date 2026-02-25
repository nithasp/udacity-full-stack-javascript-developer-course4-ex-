import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// ── Interfaces ─────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

// ── Constants ──────────────────────────────────────────────────────────────────

const API_URL = 'http://localhost:3000/auth';
const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  // ── Token helpers ──────────────────────────────────────────────────────────

  /** Check if the stored access token exists and is not expired. */
  hasValidToken(): boolean {
    const token = this.getAccessToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  getCurrentUser(): AuthUser | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  private storeSession(response: AuthResponse): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(response.user));
    this.loggedInSubject.next(true);
  }

  private storeRefreshedTokens(response: RefreshResponse): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.refreshToken);
    this.loggedInSubject.next(true);
  }

  // ── Auth operations ────────────────────────────────────────────────────────

  /**
   * Register a new user.
   * The backend accepts `username` and `password` (with optional `first_name`
   * and `last_name` that default to the username).
   */
  register(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_URL}/register`, { username, password })
      .pipe(
        tap((res) => this.storeSession(res)),
        catchError((err) => {
          const message =
            err.error?.error || 'Registration failed. Please try again.';
          return throwError(() => new Error(message));
        })
      );
  }

  /**
   * Log in with existing credentials.
   */
  login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_URL}/login`, { username, password })
      .pipe(
        tap((res) => this.storeSession(res)),
        catchError((err) => {
          const message =
            err.error?.error || 'Login failed. Please try again.';
          return throwError(() => new Error(message));
        })
      );
  }

  /**
   * Refresh the access token using the stored refresh token.
   * Called by the HTTP interceptor when a 401 with `token_expired` is received.
   */
  refreshAccessToken(): Observable<RefreshResponse> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http
      .post<RefreshResponse>(`${API_URL}/refresh`, { refreshToken })
      .pipe(
        tap((res) => this.storeRefreshedTokens(res)),
        catchError((err) => {
          // Refresh failed – clear session
          this.logout();
          const message =
            err.error?.error || 'Session expired. Please log in again.';
          return throwError(() => new Error(message));
        })
      );
  }

  /**
   * Log out – clear all stored tokens / user data.
   */
  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.loggedInSubject.next(false);
  }
}
