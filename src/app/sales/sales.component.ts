import { Component, OnInit } from '@angular/core';
//import { FormControl, Validators } from '@angular/forms';
import {faStore} from '@fortawesome/free-solid-svg-icons';

import { ProductService } from '../product.service'
import { Product } from '../product.model';
import { Category } from '../categories.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  productList : Product[] = []
  categories : Category[] = []
  searchText : any;
  searchCat : any = 0;

  constructor(
    private productsService: ProductService
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
    })
  }

  fetchCategories(){
    this.productsService.getAllCategories()
    .subscribe(categories => {
      this.categories = categories
    })
  }

  SearchName(){
    if(this.searchText == "") {
      this.fetchProducts()
    } else {
      this.productList = this.productList.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      })
    }
  }

  SearchCategory(){

    let filter : any[] = []

    if ( this.searchCat == 0 ) { 
      this.fetchProducts()
    }
    else {
      this.productList.map(prod => {
        prod.categories.map(cat => {
          if ( cat == this.searchCat ) {
            filter.push(prod)
          }
        })
      })
      this.productList = filter
    }
  }
}
