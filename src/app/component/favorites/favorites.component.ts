import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Product[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavoriteProducts();
  }

  removeFromFavorites(product: Product): void {
    this.favoriteService.removeFromFavorites(product);
    this.favorites = this.favoriteService.getFavoriteProducts();
  }
}
