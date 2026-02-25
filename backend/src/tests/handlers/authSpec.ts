import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Auth Endpoints (mockup)', () => {
  const testUser = {
    username: 'authtest_' + Date.now(),
    password: 'test1234',
  };

  let accessToken: string;
  let refreshToken: string;

  // ── Register ───────────────────────────────────────────────────────────────

  describe('POST /auth/register', () => {
    it('should register a new user and return tokens', async () => {
      const res = await request
        .post('/auth/register')
        .send(testUser)
        .expect(200);

      expect(res.body.user).toBeDefined();
      expect(res.body.user.username).toBe(testUser.username);
      expect(res.body.user.password).toBeUndefined(); // password must not leak
      expect(res.body.accessToken).toBeDefined();
      expect(res.body.refreshToken).toBeDefined();

      accessToken = res.body.accessToken;
      refreshToken = res.body.refreshToken;
    });

    it('should return 409 when username already exists', async () => {
      const res = await request
        .post('/auth/register')
        .send(testUser)
        .expect(409);

      expect(res.body.error).toBe('Username already exists');
    });

    it('should return 400 when username is missing', async () => {
      const res = await request
        .post('/auth/register')
        .send({ password: 'test1234' })
        .expect(400);

      expect(res.body.error).toBe('username is required');
    });

    it('should return 400 when password is too short', async () => {
      const res = await request
        .post('/auth/register')
        .send({ username: 'shortpw', password: 'ab' })
        .expect(400);

      expect(res.body.error).toContain('at least 4 characters');
    });
  });

  // ── Login ──────────────────────────────────────────────────────────────────

  describe('POST /auth/login', () => {
    it('should login with valid credentials and return tokens', async () => {
      const res = await request
        .post('/auth/login')
        .send(testUser)
        .expect(200);

      expect(res.body.user).toBeDefined();
      expect(res.body.user.username).toBe(testUser.username);
      expect(res.body.accessToken).toBeDefined();
      expect(res.body.refreshToken).toBeDefined();

      // Update tokens for later tests
      accessToken = res.body.accessToken;
      refreshToken = res.body.refreshToken;
    });

    it('should return 401 with wrong password', async () => {
      const res = await request
        .post('/auth/login')
        .send({ username: testUser.username, password: 'wrong' })
        .expect(401);

      expect(res.body.error).toBe('Invalid username or password');
    });

    it('should return 401 with non-existent username', async () => {
      const res = await request
        .post('/auth/login')
        .send({ username: 'nosuchuser', password: 'password' })
        .expect(401);

      expect(res.body.error).toBe('Invalid username or password');
    });

    it('should return 400 when username is missing', async () => {
      await request
        .post('/auth/login')
        .send({ password: 'test1234' })
        .expect(400);
    });

    it('should return 400 when password is missing', async () => {
      await request
        .post('/auth/login')
        .send({ username: 'someuser' })
        .expect(400);
    });
  });

  // ── Refresh ────────────────────────────────────────────────────────────────

  describe('POST /auth/refresh', () => {
    it('should return a new access token with valid refresh token', async () => {
      const res = await request
        .post('/auth/refresh')
        .send({ refreshToken })
        .expect(200);

      expect(res.body.accessToken).toBeDefined();
      expect(res.body.refreshToken).toBe(refreshToken); // same refresh token returned
    });

    it('should return 400 when refreshToken is missing', async () => {
      await request
        .post('/auth/refresh')
        .send({})
        .expect(400);
    });

    it('should return 401 when refreshToken is invalid', async () => {
      const res = await request
        .post('/auth/refresh')
        .send({ refreshToken: 'totally.invalid.token' })
        .expect(401);

      expect(res.body.error).toBe('Invalid refresh token');
    });
  });

  // ── Protected route (GET /auth/me) ─────────────────────────────────────────

  describe('GET /auth/me', () => {
    it('should return the current user when access token is valid', async () => {
      const res = await request
        .get('/auth/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(res.body.username).toBe(testUser.username);
    });

    it('should return 401 when no token is provided', async () => {
      await request.get('/auth/me').expect(401);
    });
  });

  // ── Token expiry detection (middleware) ────────────────────────────────────

  describe('Auth middleware – token_expired vs token_invalid', () => {
    it('should return code "no_token" when no Authorization header', async () => {
      const res = await request.get('/users').expect(401);
      expect(res.body.code).toBe('no_token');
    });

    it('should return code "token_invalid" for a garbage token', async () => {
      const res = await request
        .get('/users')
        .set('Authorization', 'Bearer garbage.token.here')
        .expect(401);

      expect(res.body.code).toBe('token_invalid');
    });

    it('should allow access with a valid access token', async () => {
      // The /users endpoint is protected by verifyAuthToken
      const res = await request
        .get('/users')
        .set('Authorization', `Bearer ${accessToken}`);

      // Should not be 401
      expect(res.status).not.toBe(401);
    });
  });

});

