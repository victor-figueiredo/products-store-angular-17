import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { HttpClient } from '@angular/common/http';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(payload: ProductPayload) {
    return this.httpClient.post<ProductPayload>('/api/products', payload);
  }
}
