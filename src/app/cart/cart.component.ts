import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsOnCart : Product[] = [];
  totalPrice : number = 0;

  constructor( ) { }

  ngOnInit(): void {
  }

  //ICONS
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faTrash = faTrash;
  faShoppingCart = faShoppingCart;


  recieveProducts($event : any[]) {
    this.productsOnCart = $event;
  }

}
