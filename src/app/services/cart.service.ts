import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class CartService {

  private products: any[] = [];
  private cart = new BehaviorSubject<any[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart( product: any ) { 

    for ( let i = 0; i < this.products.length; i++ ) {
      if ( product.id == this.products[i].id ) {
        this.products[i].quantity += 1;
        this.cart.next(this.products)
        return
      } 
    }

    product.quantity = 1;
    this.products = [... this.products, product];
    this.cart.next(this.products)
  }

  reduceCart( index : number ) {
    this.products[index].quantity -= 1;
    this.cart.next(this.products)
  }

  deleteProduct( index : number ) {
    this.products.splice(index, 1);
    this.cart.next(this.products)
  }

  calculateProducts( products : any[] ) {
    let counter = 0;
    products.map(product => {

      counter += product.quantity;

    })
    return counter;
  }
}
