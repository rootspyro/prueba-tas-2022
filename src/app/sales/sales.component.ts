import { Component, OnInit } from '@angular/core';
import {faStore} from '@fortawesome/free-solid-svg-icons';

import { ProductService } from '../services/product.service'
import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { Category } from '../models/categories.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  filtredProducts : Product[] = []
  productList : Product[] = []
  categories : Category[] = []
  searchText : string = '';
  searchCat : number = 0;
  searchPrice : string = '';

  constructor(
    private productsService: ProductService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.fetchProducts()
    this.fetchCategories()
  }

  faStore = faStore

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.productList = products
      this.productList[7].price = "2.000"
      this.filtredProducts = products
    })
  }

  fetchCategories(){
    this.productsService.getAllCategories()
    .subscribe(categories => {
      this.categories = categories
    })
  }

  //Search Products Filter

  SearchName(){
    this.filtredProducts = this.filtredProducts.filter(res => {
      return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
    })
  }

  SearchCategory(){

    let filter : any[] = []

    this.filtredProducts.map(prod => {
      prod.categories.map(cat => {
        if ( cat == this.searchCat ) {
          filter.push(prod)
        }
      })
    })
    this.filtredProducts = filter
  }

  SearchPrice(){
    if ( this.searchPrice == "+" ) {
      this.filtredProducts = this.filtredProducts.sort((a : Product, b : Product) => parseInt(b.price) - parseInt(a.price))
    } 
    if ( this.searchPrice == "-" ){
      this.filtredProducts = this.filtredProducts.sort((a : Product, b : Product) => parseInt(a.price) - parseInt(b.price))
    }
  }

  SearchProducts(){

    this.filtredProducts = this.productList
    
    if ( this.searchCat == 0 ) {
      if ( this.searchText == '' ) {
        this.filtredProducts = this.productList
        if ( this.searchPrice != '' ) {
          this.SearchPrice()
        }

      }
      else {
        this.SearchName()
        if ( this.searchPrice != '' ) {
          this.SearchPrice()
        }
      }
    }
    else {

      if ( this.searchText == '' ) {
        this.SearchCategory()

        if ( this.searchPrice != '' ) {
          this.SearchPrice()
        }
      }

      else {
        this.SearchCategory()
        this.SearchName()
        if ( this.searchPrice != '' ) {
          this.SearchPrice()
        }
      }

    }
  }

  //Cart actions
  
  AddProduct( product : Product ) {
    this.cartService.addCart(product)
  }
}
