import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:1234/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, Price) {
    const obj = {
      name: ProductName,
      price: Price
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
      .subscribe(res => console.log('HTTP response', res),
      err => {
              console.log('HTTP Error', err);
              return throwError(err);
            },
      () => console.log('HTTP request completed.'));
  }

  getProducts() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
  }

  updateProduct(ProductName, Price, id) {
    const obj = {
      name: ProductName,
      price: Price
    };
    this
      .http
      .put(`${this.uri}/${id}/update`, obj)
      .subscribe(res => console.log('HTTP response', res),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.'));
  }

  deleteProduct(id) {
    return this
      .http
      .delete(`${this.uri}/${id}/delete`);
  }
}
