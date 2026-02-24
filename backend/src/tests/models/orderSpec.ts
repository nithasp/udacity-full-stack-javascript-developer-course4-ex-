import { Order, OrderProduct } from '../../types/order.types';
import { User } from '../../types/user.types';
import { Product } from '../../types/product.types';
import { OrderStore } from '../../models/order';
import { UserStore } from '../../models/user';
import { ProductStore } from '../../models/product';

const store = new OrderStore();
const userStore = new UserStore();
const productStore = new ProductStore();

describe('Order Model', () => {
  let testUserId: number;
  let testProductId: number;
  let testOrderId: number;

  beforeAll(async () => {
    const user: User = {
      first_name: 'Test',
      last_name: 'User',
      username: 'testorderuser',
      password: 'password123'
    };
    const createdUser = await userStore.create(user);
    testUserId = createdUser.id as number;

    const product: Product = {
      name: 'Test Order Product',
      price: 19.99,
      category: 'Test'
    };
    const createdProduct = await productStore.create(product);
    testProductId = createdProduct.id as number;
  });

  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('index method should accept filters', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a getOrderProducts method', () => {
    expect(store.getOrderProducts).toBeDefined();
  });

  it('should have an addProduct method', () => {
    expect(store.addProduct).toBeDefined();
  });

  it('create method should add an order', async () => {
    const order: Order = {
      user_id: testUserId,
      status: 'active'
    };
    const result = await store.create(order);
    testOrderId = result.id as number;
    expect(result.user_id).toBe(testUserId);
    expect(result.status).toBe('active');
  });

  it('index method should return a list of orders', async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it('show method should return the correct order', async () => {
    const result = await store.show(testOrderId);
    expect(result.id).toBe(testOrderId);
  });

  it('index method should return orders filtered by userId', async () => {
    const result = await store.index({ userId: testUserId });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((order) => {
      expect(order.user_id).toBe(testUserId);
    });
  });

  it('index method should return orders filtered by status', async () => {
    const result = await store.index({ status: 'active' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((order) => {
      expect(order.status).toBe('active');
    });
  });

  it('index method should return orders filtered by status and userId', async () => {
    const result = await store.index({ status: 'active', userId: testUserId });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((order) => {
      expect(order.status).toBe('active');
      expect(order.user_id).toBe(testUserId);
    });
  });

  it('addProduct method should add a product to an order', async () => {
    const orderProduct: OrderProduct = {
      order_id: testOrderId,
      product_id: testProductId,
      quantity: 2
    };
    const result = await store.addProduct(orderProduct);
    expect(result.order_id).toBe(testOrderId);
    expect(result.product_id).toBe(testProductId);
    expect(result.quantity).toBe(2);
  });

  it('getOrderProducts method should return products for an order', async () => {
    const result = await store.getOrderProducts(testOrderId);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].order_id).toBe(testOrderId);
    expect(result[0].product_id).toBe(testProductId);
    expect(result[0].quantity).toBe(2);
  });

  it('update method should update order status', async () => {
    const result = await store.update(testOrderId, 'complete');
    expect(result.status).toBe('complete');
    expect(result.id).toBe(testOrderId);
  });

  it('index method should return completed orders filtered by status and userId', async () => {
    const result = await store.index({ status: 'complete', userId: testUserId });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((order) => {
      expect(order.status).toBe('complete');
      expect(order.user_id).toBe(testUserId);
    });
  });

  it('should have a recentPurchases method', () => {
    expect(store.recentPurchases).toBeDefined();
  });

  it('recentPurchases method should return recent purchases for a user', async () => {
    const result = await store.recentPurchases(testUserId);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].product_id).toBe(testProductId);
    expect(result[0].order_id).toBe(testOrderId);
    expect(result[0].quantity).toBe(2);
    expect(result[0].name).toBe('Test Order Product');
    expect(parseFloat(result[0].price as unknown as string)).toBe(19.99);
  });

  it('recentPurchases method should return at most 5 items', async () => {
    const result = await store.recentPurchases(testUserId, 5);
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it('recentPurchases method should return empty array for user with no purchases', async () => {
    const result = await store.recentPurchases(99999);
    expect(result).toEqual([]);
  });

  it('delete method should remove the order', async () => {
    const newOrder = await store.create({ user_id: testUserId, status: 'active' });
    const result = await store.delete(newOrder.id as number);
    expect(result.id).toBe(newOrder.id);
    const remaining = await store.index();
    const found = remaining.find((o) => o.id === newOrder.id);
    expect(found).toBeUndefined();
  });
});
