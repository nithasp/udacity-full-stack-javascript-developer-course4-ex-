import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly dataUrl = 'data/mockup-data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(p => p._id === id))
    );
  }
}
