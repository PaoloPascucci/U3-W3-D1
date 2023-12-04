import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  sub!: Subscription;
  products: Product[] =[];

  constructor(public prodSrv: ProductService) {}

  ngOnInit(): void {
    this.recupera();    
  }

  recupera() {
    this.sub = this.prodSrv.getProducts().subscribe((response) => {
      this.products = response.product; // Assegna l'array di prodotti
    });
  }

  addToFavorites(product: Product): void {
    this.prodSrv.addToFavorites(product);
  }

  addToCart(product: Product): void {
    this.prodSrv.addToCart(product);
  }
}