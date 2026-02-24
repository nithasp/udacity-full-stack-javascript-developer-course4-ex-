import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  username: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USERS_KEY = 'registeredUsers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  /** Check if user has a valid access token in localStorage */
  hasValidToken(): boolean {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return !!token;
  }

  /** Get stored access token */
  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  /** Get stored refresh token */
  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  /** Get registered users from localStorage */
  private getRegisteredUsers(): User[] {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  /** Save registered users to localStorage */
  private saveRegisteredUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  /** Generate a mock token */
  private generateMockToken(prefix: string, username: string): string {
    const random = Math.random().toString(36).substring(2, 15);
    const timestamp = Date.now();
    return `${prefix}_${username}_${random}_${timestamp}`;
  }

  /** Store tokens in localStorage */
  private storeTokens(tokens: AuthTokens): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
  }

  /** Mock register – stores user, returns tokens */
  register(username: string, password: string): Observable<AuthTokens> {
    const users = this.getRegisteredUsers();
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
      return throwError(() => new Error('Username already exists'));
    }

    users.push({ username, password });
    this.saveRegisteredUsers(users);

    const tokens: AuthTokens = {
      accessToken: this.generateMockToken('access', username),
      refreshToken: this.generateMockToken('refresh', username)
    };

    return of(tokens).pipe(
      delay(800), // simulate network delay
      tap(t => {
        this.storeTokens(t);
        this.loggedInSubject.next(true);
      })
    );
  }

  /** Mock login – validates credentials, returns tokens */
  login(username: string, password: string): Observable<AuthTokens> {
    const users = this.getRegisteredUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
      return throwError(() => new Error('Invalid username or password'));
    }

    const tokens: AuthTokens = {
      accessToken: this.generateMockToken('access', username),
      refreshToken: this.generateMockToken('refresh', username)
    };

    return of(tokens).pipe(
      delay(800), // simulate network delay
      tap(t => {
        this.storeTokens(t);
        this.loggedInSubject.next(true);
      })
    );
  }

  /** Logout – remove tokens from localStorage */
  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    this.loggedInSubject.next(false);
  }

  /** Mock refresh token */
  refreshAccessToken(): Observable<AuthTokens> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    const tokens: AuthTokens = {
      accessToken: this.generateMockToken('access', 'refreshed'),
      refreshToken: refreshToken
    };

    return of(tokens).pipe(
      delay(300),
      tap(t => {
        this.storeTokens(t);
        this.loggedInSubject.next(true);
      })
    );
  }
}
