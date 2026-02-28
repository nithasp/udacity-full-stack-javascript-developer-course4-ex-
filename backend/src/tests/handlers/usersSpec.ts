import supertest from 'supertest';
import app from '../../server';
import { User } from '../../types/user.types';

const request = supertest(app);
let token: string;

describe('User Endpoints', () => {
  const testUser: User = {
    firstName: 'API',
    lastName: 'Test',
    username: 'apitest',
    password: 'testpass123'
  };

  it('POST /users should create a new user', async () => {
    const response = await request
      .post('/users')
      .send(testUser)
      .expect(200);

    expect(response.body.user).toBeDefined();
    expect(response.body.token).toBeDefined();
    expect(response.body.user.username).toBe(testUser.username);
    token = response.body.token;
  });

  it('POST /users/authenticate should authenticate user', async () => {
    const response = await request
      .post('/users/authenticate')
      .send({
        username: testUser.username,
        password: testUser.password
      })
      .expect(200);

    expect(response.body.user).toBeDefined();
    expect(response.body.token).toBeDefined();
  });

  it('POST /users/authenticate should fail with wrong password', async () => {
    const response = await request
      .post('/users/authenticate')
      .send({
        username: testUser.username,
        password: 'wrongpassword'
      })
      .expect(401);

    expect(response.body.error).toBe('Invalid credentials');
  });

  it('GET /users should require token', async () => {
    await request.get('/users').expect(401);
  });

  it('GET /users should return list of users with token', async () => {
    const response = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /users/:id should return a user with recentPurchases', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    const userId = usersResponse.body[0].id;

    const response = await request
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.id).toBe(userId);
    expect(response.body.recentPurchases).toBeDefined();
    expect(Array.isArray(response.body.recentPurchases)).toBe(true);
  });

  it('GET /users/:id recentPurchases should contain purchase data from completed orders', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    const userId = usersResponse.body[0].id;

    // Create a product
    const productRes = await request
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Recent Purchase Item', price: 29.99, category: 'TestCat' });
    const productId = productRes.body.id;

    // Create an order, add the product, then complete it
    const orderRes = await request
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({ userId, status: 'active' });
    const orderId = orderRes.body.id;

    await request
      .post(`/orders/${orderId}/products`)
      .set('Authorization', `Bearer ${token}`)
      .send({ productId, quantity: 2 });

    await request
      .put(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'complete' });

    // Now fetch user show and verify recentPurchases
    const response = await request
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.recentPurchases).toBeDefined();
    expect(response.body.recentPurchases.length).toBeGreaterThan(0);

    const purchase = response.body.recentPurchases.find(
      (p: { productId: number }) => p.productId === productId
    );
    expect(purchase).toBeDefined();
    expect(purchase.name).toBe('Recent Purchase Item');
    expect(purchase.quantity).toBe(2);
    expect(purchase.orderId).toBe(orderId);
  });

  it('GET /users/:id recentPurchases should return at most 5 items', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    const userId = usersResponse.body[0].id;

    const response = await request
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.recentPurchases.length).toBeLessThanOrEqual(5);
  });

  it('PUT /users/:id should update a user with token', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    const userId = usersResponse.body[0].id;

    const response = await request
      .put(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ firstName: 'Updated' })
      .expect(200);

    expect(response.body.firstName).toBe('Updated');
  });

  it('PUT /users/:id should require token', async () => {
    await request.put('/users/1').send({ firstName: 'Fail' }).expect(401);
  });

  it('DELETE /users/:id should require token', async () => {
    await request.delete('/users/1').expect(401);
  });

  it('DELETE /users/:id should delete a user with token', async () => {
    const createRes = await request
      .post('/users')
      .send({
        firstName: 'Delete',
        lastName: 'Me',
        username: 'deleteme',
        password: 'testpass123'
      });

    const deleteUserId = createRes.body.user.id;

    const response = await request
      .delete(`/users/${deleteUserId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.id).toBe(deleteUserId);
  });

  describe('Input Validation', () => {
    it('POST /users should return 400 when firstName is missing', async () => {
      const response = await request
        .post('/users')
        .send({ lastName: 'Test', username: 'noname', password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('firstName is required and must be a non-empty string');
    });

    it('POST /users should return 400 when lastName is missing', async () => {
      const response = await request
        .post('/users')
        .send({ firstName: 'Test', username: 'nolast', password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('lastName is required and must be a non-empty string');
    });

    it('POST /users should return 400 when username is missing', async () => {
      const response = await request
        .post('/users')
        .send({ firstName: 'Test', lastName: 'User', password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('username is required and must be a non-empty string');
    });

    it('POST /users should return 400 when password is missing', async () => {
      const response = await request
        .post('/users')
        .send({ firstName: 'Test', lastName: 'User', username: 'nopass' })
        .expect(400);
      expect(response.body.error).toBe('password is required and must be a non-empty string');
    });

    it('POST /users/authenticate should return 400 when username is missing', async () => {
      const response = await request
        .post('/users/authenticate')
        .send({ password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('username is required');
    });

    it('POST /users/authenticate should return 400 when password is missing', async () => {
      const response = await request
        .post('/users/authenticate')
        .send({ username: 'someuser' })
        .expect(400);
      expect(response.body.error).toBe('password is required');
    });

    it('GET /users/:id should return 400 for invalid id', async () => {
      const response = await request
        .get('/users/abc')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('user id must be a valid positive integer');
    });

    it('GET /users/:id should return 404 for nonexistent id', async () => {
      const response = await request
        .get('/users/99999')
        .set('Authorization', `Bearer ${token}`)
        .expect(404);
      expect(response.body.error).toBe('user with id 99999 not found');
    });

    it('PUT /users/:id should return 400 for invalid id', async () => {
      const response = await request
        .put('/users/abc')
        .set('Authorization', `Bearer ${token}`)
        .send({ firstName: 'Test' })
        .expect(400);
      expect(response.body.error).toBe('user id must be a valid positive integer');
    });

    it('PUT /users/:id should return 400 when no valid fields provided', async () => {
      const response = await request
        .put('/users/1')
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(400);
      expect(response.body.error).toBe('at least one field (firstName, lastName, username, password) is required to update');
    });

    it('DELETE /users/:id should return 400 for invalid id', async () => {
      const response = await request
        .delete('/users/abc')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('user id must be a valid positive integer');
    });
  });
});
