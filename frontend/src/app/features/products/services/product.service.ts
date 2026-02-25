import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

interface BackendProduct {
  id: number;
  name: string;
  category?: string;
  price: number;
  image?: string;
  description?: string;
  preview_img?: string[];
  types?: Product['types'];
  reviews?: Product['reviews'];
  overall_rating?: number;
  stock?: number;
  isActive?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<BackendProduct[]>(this.apiUrl).pipe(
      map(products => products.map(p => this.mapBackendProduct(p)))
    );
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.http.get<BackendProduct>(`${this.apiUrl}/${id}`).pipe(
      map(p => this.mapBackendProduct(p))
    );
  }

  private mapBackendProduct(p: BackendProduct): Product {
    return {
      _id: String(p.id),
      name: p.name,
      category: p.category ?? '',
      price: p.price,
      image: p.image ?? '',
      description: p.description ?? '',
      preview_img: p.preview_img ?? [],
      types: p.types ?? [],
      reviews: p.reviews ?? [],
      overall_rating: p.overall_rating ?? 0,
      stock: p.stock,
      isActive: p.isActive,
    };
  }
}
