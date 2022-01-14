import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Category } from './categories.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient ) {}

  url : string = 'https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/';

  getAllProducts() {
    return this.http.get<Product[]>(this.url + 'products')
  }

  getAllCategories() {
    return this.http.get<Category[]>(this.url + 'categories')
  }
}
