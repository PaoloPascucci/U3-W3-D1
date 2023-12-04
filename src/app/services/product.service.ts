import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  // Array per gestire i preferiti e il carrello
  private favoriteProducts: Product[] = [];
  private cartProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  // Restituisce lo stato corrente dei preferiti
  getFavoriteProducts(): Product[] {
    return this.favoriteProducts;
  }

  // Aggiunge un prodotto ai preferiti
  addToFavorites(product: Product): void {
    this.favoriteProducts.push(product);
  }

  // Restituisce lo stato corrente del carrello
  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  // Aggiunge un prodotto al carrello
  addToCart(product: Product): void {
    this.cartProducts.push(product);
  }
}