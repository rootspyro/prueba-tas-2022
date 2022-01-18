import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'ventas',
    component : SalesComponent
  },
  {
    path: 'carrito',
    component : CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
