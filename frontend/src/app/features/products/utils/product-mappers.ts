import { Product, BackendProduct } from '../models/product.model';

export type { BackendProduct };

export function mapBackendProduct(p: BackendProduct): Product {
  return {
    _id: String(p.id),
    name: p.name,
    category: p.category ?? '',
    price: p.price,
    image: p.image ?? '',
    description: p.description ?? '',
    previewImg: p.previewImg ?? [],
    types: p.types ?? [],
    reviews: p.reviews ?? [],
    overallRating: p.overallRating ?? 0,
    stock: p.stock,
    isActive: p.isActive,
    shopId: p.shopId,
    shopName: p.shopName,
  };
}
