import { Component, OnInit, OnChanges } from '@angular/core';
import { faAngleDown, faAngleUp, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsOnCart : any[] = [];
  totalProducts : number = 0;
  totalPrice : string = '';

  constructor( private cartService: CartService ) { 
    this.cartService.cart$.subscribe(products => {
      this.productsOnCart = products
      this.totalProducts = this.cartService.calculateProducts(products);
    }),

    this.calculateTotalPrice();
  }

  ngOnInit(): void {
  }


  //ICONS
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faTrash = faTrash;
  faShoppingCart = faShoppingCart;

  setProducts() {
    this.cartService.cart$.subscribe(products => {
      this.productsOnCart = products
    })
  }

  calculatePrice(product : any) {
    let result =  parseFloat(product.price) * 1000 * parseFloat(product.quantity)
    return result.toLocaleString('es-MX');
  }

  calculateTotalPrice(){
    let total : number = 0;
    for ( let i = 0; i < this.productsOnCart.length; i++ ){
      total += parseFloat(this.productsOnCart[i].price) * 1000 * parseFloat(this.productsOnCart[i].quantity)
    }
    this.totalPrice = total.toLocaleString('es-MX');
  }

  addProduct(product : any) {
    this.cartService.addCart(product)
    this.calculateTotalPrice()
  }

  reduceProduct(product : any, index : number) {
    if ( product.quantity > 1 ) {
      this.cartService.reduceCart(index)
      this.calculateTotalPrice()
    }
    else {
      return
    }
  }

  deleteProduct(  index : number ) {
    this.cartService.deleteProduct(index)
    this.calculateTotalPrice()
  }
}
