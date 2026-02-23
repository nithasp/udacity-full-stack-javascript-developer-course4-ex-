import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product, Shop } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly dataUrl = 'data/mockup-data.json';

  constructor(private http: HttpClient) {}

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.dataUrl);
  }

  getProducts(): Observable<Product[]> {
    return this.getShops().pipe(
      map(shops => shops.flatMap(shop =>
        shop.products.map(p => ({ ...p, shopId: shop.shop_id, shopName: shop.name }))
      ))
    );
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(p => p._id === id))
    );
  }
}
