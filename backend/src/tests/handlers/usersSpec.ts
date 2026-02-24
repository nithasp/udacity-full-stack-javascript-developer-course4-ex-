import supertest from 'supertest';
import app from '../../server';
import { User } from '../../types/user.types';

const request = supertest(app);
let token: string;

describe('User Endpoints', () => {
  const testUser: User = {
    first_name: 'API',
    last_name: 'Test',
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

  it('GET /users/:id should return a user with recent_purchases', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    const userId = usersResponse.body[0].id;

    const response = await request
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.id).toBe(userId);
    expect(response.body.recent_purchases).toBeDefined();
    expect(Array.isArray(response.body.recent_purchases)).toBe(true);
  });

  it('GET /users/:id recent_purchases should contain purchase data from completed orders', async () => {
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
      .send({ user_id: userId, status: 'active' });
    const orderId = orderRes.body.id;

    await request
      .post(`/orders/${orderId}/products`)
      .set('Authorization', `Bearer ${token}`)
      .send({ product_id: productId, quantity: 2 });

    await request
      .put(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'complete' });

    // Now fetch user show and verify recent_purchases
    const response = await request
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.recent_purchases).toBeDefined();
    expect(response.body.recent_purchases.length).toBeGreaterThan(0);

    const purchase = response.body.recent_purchases.find(
      (p: { product_id: number }) => p.product_id === productId
    );
    expect(purchase).toBeDefined();
    expect(purchase.name).toBe('Recent Purchase Item');
    expect(purchase.quantity).toBe(2);
    expect(purchase.order_id).toBe(orderId);
  });

  it('GET /users/:id recent_purchases should return at most 5 items', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    const userId = usersResponse.body[0].id;

    const response = await request
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.recent_purchases.length).toBeLessThanOrEqual(5);
  });

  it('PUT /users/:id should update a user with token', async () => {
    const usersResponse = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    const userId = usersResponse.body[0].id;

    const response = await request
      .put(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ first_name: 'Updated' })
      .expect(200);

    expect(response.body.first_name).toBe('Updated');
  });

  it('PUT /users/:id should require token', async () => {
    await request.put('/users/1').send({ first_name: 'Fail' }).expect(401);
  });

  it('DELETE /users/:id should require token', async () => {
    await request.delete('/users/1').expect(401);
  });

  it('DELETE /users/:id should delete a user with token', async () => {
    const createRes = await request
      .post('/users')
      .send({
        first_name: 'Delete',
        last_name: 'Me',
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
    it('POST /users should return 400 when first_name is missing', async () => {
      const response = await request
        .post('/users')
        .send({ last_name: 'Test', username: 'noname', password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('first_name is required and must be a non-empty string');
    });

    it('POST /users should return 400 when last_name is missing', async () => {
      const response = await request
        .post('/users')
        .send({ first_name: 'Test', username: 'nolast', password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('last_name is required and must be a non-empty string');
    });

    it('POST /users should return 400 when username is missing', async () => {
      const response = await request
        .post('/users')
        .send({ first_name: 'Test', last_name: 'User', password: 'pass123' })
        .expect(400);
      expect(response.body.error).toBe('username is required and must be a non-empty string');
    });

    it('POST /users should return 400 when password is missing', async () => {
      const response = await request
        .post('/users')
        .send({ first_name: 'Test', last_name: 'User', username: 'nopass' })
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
        .send({ first_name: 'Test' })
        .expect(400);
      expect(response.body.error).toBe('user id must be a valid positive integer');
    });

    it('PUT /users/:id should return 400 when no valid fields provided', async () => {
      const response = await request
        .put('/users/1')
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(400);
      expect(response.body.error).toBe('at least one field (first_name, last_name, username, password) is required to update');
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
