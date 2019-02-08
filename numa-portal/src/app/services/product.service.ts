import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../models/product'
  import { from } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectProduct: Product = new Product();


  constructor(private firebase: AngularFireDatabase) { }

  getProduct() {
   return this.productList = this.firebase.list('products')
  }

  insertProduct(product: Product) {
    this.productList.push({
      name: product.name,
      category: product.category,
      Location: product.Location,
      priority: product.priority
    })
  }
  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      Location: product.Location,
      priority: product.priority  });
}

  deleteProduct($key: string) {

    this.productList.remove($key);

  }
}
