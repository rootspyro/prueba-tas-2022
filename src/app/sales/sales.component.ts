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

  filtredProducts : Product[] = []
  productList : Product[] = []
  categories : Category[] = []
  searchText : any = '';
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
      this.filtredProducts = products
    })
  }

  fetchCategories(){
    this.productsService.getAllCategories()
    .subscribe(categories => {
      this.categories = categories
    })
  }

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

  SearchProducts(){

    this.filtredProducts = this.productList
    
    if ( this.searchCat == 0 ) {
      if ( this.searchText == '' ) {
        this.filtredProducts = this.productList
      }
      else {
        this.SearchName()
      }
    }
    else {

      if ( this.searchText == '' ) {
        this.SearchCategory()
      }

      else {
        this.SearchCategory()
        this.SearchName()
      }

    }
  }
}
