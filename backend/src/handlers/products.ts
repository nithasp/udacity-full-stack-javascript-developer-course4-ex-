import { Application, Request, Response } from 'express';
import { Product } from '../types/product.types';
import { ProductStore } from '../models/product';
import { verifyAuthToken } from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';
import { parseId, requireString, optionalString } from '../utils/validate';

const store = new ProductStore();

const index = asyncHandler(async (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;
  res.json(category ? await store.getByCategory(category) : await store.index());
});

const show = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'product id');
  const product = await store.show(id);
  if (!product) throw new AppError(`product with id ${req.params.id} not found`, 404);
  res.json(product);
});

const mostPopular = asyncHandler(async (_req: Request, res: Response) => {
  res.json(await store.mostPopular());
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const name = requireString(req.body.name, 'name');

  if (req.body.price === undefined || req.body.price === null || isNaN(Number(req.body.price)))
    throw new AppError('price is required and must be a valid number', 400);
  if (Number(req.body.price) < 0)
    throw new AppError('price must be a non-negative number', 400);

  const product: Product = {
    name,
    price: parseFloat(req.body.price),
    category: req.body.category,
    image: req.body.image,
    description: req.body.description,
    preview_img: req.body.preview_img,
    types: req.body.types,
    reviews: req.body.reviews,
    overall_rating: req.body.overall_rating !== undefined ? parseFloat(req.body.overall_rating) : undefined,
    stock: req.body.stock !== undefined ? parseInt(req.body.stock) : undefined,
    isActive: req.body.isActive,
  };

  res.json(await store.create(product));
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'product id');
  const {
    name, price, category, image, description,
    preview_img, types, reviews, overall_rating, stock, isActive
  } = req.body;

  if (!name && price === undefined && category === undefined &&
      image === undefined && description === undefined &&
      preview_img === undefined && types === undefined &&
      reviews === undefined && overall_rating === undefined &&
      stock === undefined && isActive === undefined)
    throw new AppError('at least one field is required to update', 400);

  const validatedName = optionalString(name, 'name');

  if (price !== undefined) {
    if (isNaN(Number(price))) throw new AppError('price must be a valid number', 400);
    if (Number(price) < 0) throw new AppError('price must be a non-negative number', 400);
  }

  const updatedProduct = await store.update(id, {
    name: validatedName,
    price: price !== undefined ? parseFloat(price) : undefined,
    category,
    image,
    description,
    preview_img,
    types,
    reviews,
    overall_rating: overall_rating !== undefined ? parseFloat(overall_rating) : undefined,
    stock: stock !== undefined ? parseInt(stock) : undefined,
    isActive,
  });
  if (!updatedProduct) throw new AppError(`product with id ${req.params.id} not found`, 404);
  res.json(updatedProduct);
});

const destroy = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'product id');
  const deleted = await store.delete(id);
  if (!deleted) throw new AppError(`product with id ${req.params.id} not found`, 404);
  res.json(deleted);
});

const productRoutes = (app: Application) => {
  app.get('/products', index);
  app.get('/products/popular', mostPopular);
  app.get('/products/:id', show);
  app.post('/products', verifyAuthToken, create);
  app.put('/products/:id', verifyAuthToken, update);
  app.delete('/products/:id', verifyAuthToken, destroy);
};

export default productRoutes;
