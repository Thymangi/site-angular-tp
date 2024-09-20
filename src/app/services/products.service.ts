import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'assets/products.json'; // URL vers le fichier JSON des produits

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.productsUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.productsUrl}?id=${id}`);
  }
}
