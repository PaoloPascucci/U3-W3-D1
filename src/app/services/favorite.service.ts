import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: Product[] = [];

  getFavoriteProducts(): Product[] {
    return this.favorites;
  }

  addToFavorites(product: Product): void {
    this.favorites.push(product);
  }

  removeFromFavorites(product: Product): void {
    const index = this.favorites.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
