import supertest from 'supertest';
import app from '../../server';
import { Product } from '../../types/product.types';
import { User } from '../../types/user.types';

const request = supertest(app);
let token: string;

describe('Product Endpoints', () => {
  beforeAll(async () => {
    const user: User = {
      first_name: 'Product',
      last_name: 'Tester',
      username: 'producttester',
      password: 'testpass123'
    };
    const response = await request.post('/users').send(user);
    token = response.body.token;
  });

  const testProduct: Product = {
    name: 'Test API Product',
    price: 49.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'A test product for API testing.',
    preview_img: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    types: [
      {
        product_id: 9001,
        color: 'Red',
        quantity: 10,
        price: 49.99,
        stock: 10,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
      }
    ],
    reviews: [],
    overall_rating: 0,
    stock: 10,
    isActive: true
  };

  it('GET /products should return list of products', async () => {
    const response = await request.get('/products').expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /products should create a product with token', async () => {
    const response = await request
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send(testProduct)
      .expect(200);

    expect(response.body.name).toBe(testProduct.name);
    expect(parseFloat(response.body.price)).toBe(testProduct.price);
    expect(response.body.category).toBe(testProduct.category);
    expect(response.body.image).toBe(testProduct.image);
    expect(response.body.description).toBe(testProduct.description);
    expect(response.body.preview_img).toEqual(testProduct.preview_img);
    expect(response.body.types).toEqual(testProduct.types);
    expect(response.body.stock).toBe(testProduct.stock);
    expect(response.body.isActive).toBe(testProduct.isActive);
  });

  it('POST /products should require token', async () => {
    await request.post('/products').send(testProduct).expect(401);
  });

  it('GET /products/:id should return a product', async () => {
    const productsResponse = await request.get('/products');
    const productId = productsResponse.body[0].id;

    const response = await request.get(`/products/${productId}`).expect(200);
    expect(response.body.id).toBe(productId);
  });

  it('GET /products?category= should return products filtered by category', async () => {
    const response = await request
      .get(`/products?category=${testProduct.category}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].category).toBe(testProduct.category);
  });

  it('GET /products?category= should be case-insensitive', async () => {
    const response = await request
      .get(`/products?category=${(testProduct.category as string).toUpperCase()}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].category).toBe(testProduct.category);
  });

  it('GET /products/popular should return top 5 most popular products', async () => {
    const response = await request.get('/products/popular').expect(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeLessThanOrEqual(5);
  });

  it('PUT /products/:id should update a product with token', async () => {
    const productsResponse = await request.get('/products');
    const productId = productsResponse.body[0].id;

    const response = await request
      .put(`/products/${productId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Updated Product', price: 59.99, description: 'Updated description' })
      .expect(200);

    expect(response.body.name).toBe('Updated Product');
    expect(parseFloat(response.body.price)).toBe(59.99);
    expect(response.body.description).toBe('Updated description');
  });

  it('PUT /products/:id should require token', async () => {
    await request.put('/products/1').send({ name: 'Fail' }).expect(401);
  });

  it('DELETE /products/:id should require token', async () => {
    await request.delete('/products/1').expect(401);
  });

  it('DELETE /products/:id should delete a product with token', async () => {
    const createRes = await request
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'To Delete', price: 1.00, category: 'Temp' });

    const deleteProductId = createRes.body.id;

    const response = await request
      .delete(`/products/${deleteProductId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.id).toBe(deleteProductId);
  });

  describe('Input Validation', () => {
    it('POST /products should return 400 when name is missing', async () => {
      const response = await request
        .post('/products')
        .set('Authorization', `Bearer ${token}`)
        .send({ price: 9.99 })
        .expect(400);
      expect(response.body.error).toBe('name is required and must be a non-empty string');
    });

    it('POST /products should return 400 when price is missing', async () => {
      const response = await request
        .post('/products')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'No Price Product' })
        .expect(400);
      expect(response.body.error).toBe('price is required and must be a valid number');
    });

    it('POST /products should return 400 when price is negative', async () => {
      const response = await request
        .post('/products')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Negative Price', price: -5 })
        .expect(400);
      expect(response.body.error).toBe('price must be a non-negative number');
    });

    it('GET /products/:id should return 400 for invalid id', async () => {
      const response = await request
        .get('/products/abc')
        .expect(400);
      expect(response.body.error).toBe('product id must be a valid positive integer');
    });

    it('GET /products/:id should return 404 for nonexistent id', async () => {
      const response = await request
        .get('/products/99999')
        .expect(404);
      expect(response.body.error).toBe('product with id 99999 not found');
    });

    it('PUT /products/:id should return 400 for invalid id', async () => {
      const response = await request
        .put('/products/abc')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Test' })
        .expect(400);
      expect(response.body.error).toBe('product id must be a valid positive integer');
    });

    it('PUT /products/:id should return 400 when no valid fields provided', async () => {
      const response = await request
        .put('/products/1')
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(400);
      expect(response.body.error).toBe('at least one field is required to update');
    });

    it('PUT /products/:id should return 400 when name is empty string', async () => {
      const response = await request
        .put('/products/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: '   ' })
        .expect(400);
      expect(response.body.error).toBe('name must be a non-empty string');
    });

    it('PUT /products/:id should return 400 when price is invalid', async () => {
      const response = await request
        .put('/products/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ price: 'abc' })
        .expect(400);
      expect(response.body.error).toBe('price must be a valid number');
    });

    it('PUT /products/:id should return 400 when price is negative', async () => {
      const response = await request
        .put('/products/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ price: -10 })
        .expect(400);
      expect(response.body.error).toBe('price must be a non-negative number');
    });

    it('DELETE /products/:id should return 400 for invalid id', async () => {
      const response = await request
        .delete('/products/abc')
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
      expect(response.body.error).toBe('product id must be a valid positive integer');
    });
  });
});
