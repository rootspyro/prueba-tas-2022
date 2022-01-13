import { Component, OnInit } from '@angular/core';
//import { FormControl, Validators } from '@angular/forms';
import {faStore} from '@fortawesome/free-solid-svg-icons';

import { ProductService } from '../product.service'
import { Product } from '../product.model';
import { Categorie } from '../categories.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  productList : Product[] = []
  categories : Categorie[] = []
  searchText : any;

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

  Search(){
    if(this.searchText == "") {
      this.ngOnInit()
    } else {
      this.productList = this.productList.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      })
    }
  }
}
