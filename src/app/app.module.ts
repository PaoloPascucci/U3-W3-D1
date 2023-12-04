import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FavoritesComponent,    
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
