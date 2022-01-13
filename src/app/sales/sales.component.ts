import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(
    private productsService: ProductService
  ) {
    this.productName = new FormControl('', [ 
      Validators.required,
      Validators.max(15)
    ])
  }

  ngOnInit(): void {
    this.fetchProducts()
    this.fetchCategories()
  }

  productList : Product[] = []
  categories : Categorie[] = []

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

  //Products form 
  productName : FormControl
}
