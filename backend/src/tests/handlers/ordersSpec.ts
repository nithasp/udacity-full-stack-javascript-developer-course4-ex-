import supertest from 'supertest';
import app from '../../server';
import { Order } from '../../types/order.types';
import { User } from '../../types/user.types';
import { Product } from '../../types/product.types';

const request = supertest(app);
let token: string;
let userId: number;
let productId: number;
let orderId: number;

describe('Order Endpoints', () => {
  beforeAll(async () => {
    const user: User = {
      firstName: 'Order',
      lastName: 'Tester',
      username: 'ordertester',
      password: 'testpass123'
    };
    const userResponse = await request.post('/users').send(user);
    token = userResponse.body.token;
    userId = userResponse.body.user.id;

    const product: Product = {
      name: 'Order Test Product',
      price: 99.99,
      category: 'Test',
      image: 'https://example.com/test.jpg',
      description: 'A test product for order endpoint testing',
      stock: 20,
      isActive: true
    };
    const productResponse = await request
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send(product);
    productId = productResponse.body.id;
  });

  it('POST /orders should create an order with token', async () => {
    const order: Order = {
      userId,
      status: 'active'
    };

    const response = await request
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send(order)
      .expect(200);

    expect(response.body.userId).toBe(userId);
    expect(response.body.status).toBe('active');
    orderId = response.body.id;
  });

  it('POST /orders should require token', async () => {
    await request.post('/orders').send({ userId }).expect(401);
  });

  it('GET /orders should require token', async () => {
    await request.get('/orders').expect(401);
  });

  it('GET /orders should return list of orders with token', async () => {
    const response = await request
      .get('/orders')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /orders/:id should return an order with token', async () => {
    const response = await request
      .get(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.id).toBe(orderId);
  });

  it('GET /orders?userId= should return orders for user', async () => {
    const response = await request
      .get(`/orders?userId=${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((order: Order) => {
      expect(order.userId).toBe(userId);
    });
  });

  it('GET /orders?status=active should return active orders', async () => {
    const response = await request
      .get('/orders?status=active')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((order: Order) => {
      expect(order.status).toBe('active');
    });
  });

  it('GET /orders?status=active&userId= should return active orders for user', async () => {
    const response = await request
      .get(`/orders?status=active&userId=${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((order: Order) => {
      expect(order.status).toBe('active');
      expect(order.userId).toBe(userId);
    });
  });

  it('GET /orders/user/:userId/current should return current active orders for user', async () => {
    const response = await request
      .get(`/orders/user/${userId}/current`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((order: Order) => {
      expect(order.status).toBe('active');
      expect(order.userId).toBe(userId);
    });
  });

  it('GET /orders/user/:userId/current should require token', async () => {
    await request.get(`/orders/user/${userId}/current`).expect(401);
  });

  it('POST /orders/:id/products should add product to order', async () => {
    const response = await request
      .post(`/orders/${orderId}/products`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        productId,
        quantity: 3
      })
      .expect(200);

    expect(response.body.orderId).toBe(orderId);
    expect(response.body.productId).toBe(productId);
    expect(response.body.quantity).toBe(3);
  });

  it('GET /orders/:id/products should return products for an order', async () => {
    const response = await request
      .get(`/orders/${orderId}/products`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].orderId).toBe(orderId);
    expect(response.body[0].productId).toBe(productId);
    expect(response.body[0].quantity).toBe(3);
  });

  it('GET /orders/:id/products should require token', async () => {
    await request.get(`/orders/${orderId}/products`).expect(401);
  });

  it('PUT /orders/:id should update order status with token', async () => {
    const response = await request
      .put(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'complete' })
      .expect(200);

    expect(response.body.status).toBe('complete');
    expect(response.body.id).toBe(orderId);
  });

  it('GET /orders?status=complete&userId= should return completed orders for user', async () => {
    const response = await request
      .get(`/orders?status=complete&userId=${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((order: Order) => {
      expect(order.status).toBe('complete');
      expect(order.userId).toBe(userId);
    });
  });

  it('GET /orders/user/:userId/completed should return completed orders for user', async () => {
    const response = await request
      .get(`/orders/user/${userId}/completed`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((order: Order) => {
      expect(order.status).toBe('complete');
      expect(order.userId).toBe(userId);
    });
  });

  it('GET /orders/user/:userId/completed should require token', async () => {
    await request.get(`/orders/user/${userId}/completed`).expect(401);
  });

  it('PUT /orders/:id should require token', async () => {
    await request.put(`/orders/${orderId}`).send({ status: 'complete' }).expect(401);
  });

  it('DELETE /orders/:id should require token', async () => {
    await request.delete(`/orders/${orderId}`).expect(401);
  });

  it('DELETE /orders/:id should delete an order with token', async () => {
    const createRes = await request
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({ userId, status: 'active' });

    const deleteOrderId = createRes.body.id;

    const response = await request
      .delete(`/orders/${deleteOrderId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.id).toBe(deleteOrderId);
  });

  describe('Input Validation', () => {
    it('GET /orders should return 400 for invalid status filter', async () => {
      const response = await request
        .get('/orders?status=invalid')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe("status filter must be either 'active' or 'complete'");
    });

    it('GET /orders should return 400 for invalid userId filter', async () => {
      const response = await request
        .get('/orders?userId=abc')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('userId filter must be a valid positive integer');
    });

    it('GET /orders/:id should return 400 for invalid id', async () => {
      const response = await request
        .get('/orders/abc')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('order id must be a valid positive integer');
    });

    it('GET /orders/:id should return 404 for nonexistent id', async () => {
      const response = await request
        .get('/orders/99999')
        .set('Authorization', `Bearer ${token}`)
        .expect(404);
      expect(response.body.error).toBe('order with id 99999 not found');
    });

    it('POST /orders should return 400 when userId is missing', async () => {
      const response = await request
        .post('/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({ status: 'active' })
        .expect(400);
      expect(response.body.error).toBe('userId is required and must be a valid number');
    });

    it('POST /orders should return 400 when userId is invalid', async () => {
      const response = await request
        .post('/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({ userId: 'abc', status: 'active' })
        .expect(400);
      expect(response.body.error).toBe('userId is required and must be a valid number');
    });

    it('POST /orders should return 400 when status is invalid', async () => {
      const response = await request
        .post('/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({ userId, status: 'invalid' })
        .expect(400);
      expect(response.body.error).toBe("status must be either 'active' or 'complete'");
    });

    it('PUT /orders/:id should return 400 for invalid id', async () => {
      const response = await request
        .put('/orders/abc')
        .set('Authorization', `Bearer ${token}`)
        .send({ status: 'complete' })
        .expect(400);
      expect(response.body.error).toBe('order id must be a valid positive integer');
    });

    it('PUT /orders/:id should return 400 when status is missing', async () => {
      const response = await request
        .put(`/orders/${orderId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(400);
      expect(response.body.error).toBe('status is required');
    });

    it('PUT /orders/:id should return 400 when status is invalid', async () => {
      const response = await request
        .put(`/orders/${orderId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ status: 'invalid' })
        .expect(400);
      expect(response.body.error).toBe("status must be either 'active' or 'complete'");
    });

    it('DELETE /orders/:id should return 400 for invalid id', async () => {
      const response = await request
        .delete('/orders/abc')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('order id must be a valid positive integer');
    });

    it('GET /orders/:id/products should return 400 for invalid id', async () => {
      const response = await request
        .get('/orders/abc/products')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('order id must be a valid positive integer');
    });

    it('POST /orders/:id/products should return 400 when productId is missing', async () => {
      const response = await request
        .post(`/orders/${orderId}/products`)
        .set('Authorization', `Bearer ${token}`)
        .send({ quantity: 1 })
        .expect(400);
      expect(response.body.error).toBe('productId is required and must be a valid number');
    });

    it('POST /orders/:id/products should return 400 when quantity is missing', async () => {
      const response = await request
        .post(`/orders/${orderId}/products`)
        .set('Authorization', `Bearer ${token}`)
        .send({ productId })
        .expect(400);
      expect(response.body.error).toBe('quantity is required and must be a valid number');
    });

    it('GET /orders/user/:userId/current should return 400 for invalid userId', async () => {
      const response = await request
        .get('/orders/user/abc/current')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('userId must be a valid positive integer');
    });

    it('GET /orders/user/:userId/completed should return 400 for invalid userId', async () => {
      const response = await request
        .get('/orders/user/abc/completed')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('userId must be a valid positive integer');
    });
  });
});
