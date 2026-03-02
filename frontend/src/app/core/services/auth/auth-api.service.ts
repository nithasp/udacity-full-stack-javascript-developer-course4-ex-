import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser, AuthResponse, RefreshResponse } from '../../models/auth.model';
import { API } from '../../config/api-config';

export type { AuthUser, AuthResponse, RefreshResponse };

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly baseUrl = `${API.baseUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, { username, password });
  }

  register(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, { username, password });
  }

  /**
   * Exchange a refresh token for a new access + refresh token pair.
   * Pure HTTP — no side effects on the caller's state.
   */
  refresh(refreshToken: string): Observable<RefreshResponse> {
    return this.http.post<RefreshResponse>(`${this.baseUrl}/refresh`, { refreshToken });
  }

  /**
   * Tell the backend to invalidate the refresh token stored in the DB.
   * Fire-and-forget — callers subscribe with { error: () => {} }.
   */
  logout(refreshToken: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/logout`, { refreshToken });
  }

  /** Fetch the authenticated user's profile from the server. */
  fetchMe(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.baseUrl}/me`);
  }
}
