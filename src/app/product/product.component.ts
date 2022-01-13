import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Product } from '../product.model';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product;

  imgPathExample: string = 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  faCartPlus = faCartPlus;

}
