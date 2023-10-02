import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(productId: number): Observable<any> {
    // Ürün detayını çekmek için API çağrısını yapın ve sonucu döndürün
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }
}
  // Burada, productId ile belirtilen ürünün detayını almak için API çağrısını yapabilirsin.
    // Örneğin, this.http.get(this.apiUrl + '/' + productId) gibi bir çağrı yapabilirsn.
    // Daha sonra bu metodu kullanarak ürün detaylarını çekebilirsin.

