import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //ICONS
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faTrash = faTrash;
  faShoppingCart = faShoppingCart;


  productsOnCart : any[] = [];
  totalPrice : number = 0;

}
