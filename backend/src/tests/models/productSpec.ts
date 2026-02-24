import { Product } from '../../types/product.types';
import { ProductStore } from '../../models/product';

const store = new ProductStore();

describe('Product Model', () => {
  const testProduct: Product = {
    name: 'Test Product',
    price: 29.99,
    category: 'Electronics'
  };

  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a getByCategory method', () => {
    expect(store.getByCategory).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await store.create(testProduct);
    expect(result.name).toBe(testProduct.name);
    expect(parseFloat(result.price as unknown as string)).toBe(testProduct.price);
    expect(result.category).toBe(testProduct.category);
  });

  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it('show method should return the correct product', async () => {
    const products = await store.index();
    const result = await store.show(products[0].id as number);
    expect(result.id).toBe(products[0].id);
  });

  it('getByCategory method should return products in the category', async () => {
    const result = await store.getByCategory(testProduct.category as string);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].category).toBe(testProduct.category);
  });

  it('getByCategory method should be case-insensitive', async () => {
    const result = await store.getByCategory(
      (testProduct.category as string).toLowerCase()
    );
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].category).toBe(testProduct.category);
  });

  it('update method should update product information', async () => {
    const products = await store.index();
    const productId = products[0].id as number;
    const result = await store.update(productId, { name: 'Updated Product', price: 39.99 });
    expect(result.name).toBe('Updated Product');
    expect(parseFloat(result.price as unknown as string)).toBe(39.99);
  });

  it('delete method should remove the product', async () => {
    const created = await store.create({ name: 'To Delete', price: 5.00, category: 'Temp' });
    const result = await store.delete(created.id as number);
    expect(result.id).toBe(created.id);
    const remaining = await store.index();
    const found = remaining.find((p) => p.id === created.id);
    expect(found).toBeUndefined();
  });
});
