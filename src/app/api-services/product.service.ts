import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../app/api-model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  //Get all Products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/Product');
  }

  //Add Product
  addProduct(product: Product, fid: string) {
    return this.http.post<Product>(this.baseApiUrl + '/admin/fruit/create', product);
  }


  //Get 1 Product
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/api/Product/' + id);
  }

  //Update Product
  updateProduct(updateProductRequest: Product): Observable<Product> {
    return this.http.put<Product>(
      this.baseApiUrl + '/api/Product',
      updateProductRequest
    );
  }

  //Delete Product
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(
      this.baseApiUrl + '/api/Product/' + id
    );
  }
}
