import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(category): Observable<any[]> {
    return this.http.get<any[]>('assets/macbookpro-data.json');
  }

  getProductCategory(category): Observable<any[]> {
    return this.http.get<any[]>('assets/macbookpro-cat-data.json');
  }

  getProductDetail(id): Observable<any> {
    return this.http.get<any[]>('assets/macbookpro-data-detail.json')
      .pipe(
        map(products => products.find(product => product.id == id))
      );
  }
}
