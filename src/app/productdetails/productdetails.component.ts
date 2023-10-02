import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any; // Seçilen ürünün ayrıntıları için bir değişken tanımlanır.


  constructor(
    private route: ActivatedRoute, // URL' den gelen parametreleri almak için
    private productService: ProductService // ProductServisi enjekte etmek için
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    //  Bu kod mevcut sayfanın URL'sindeki "id" parametresinin değerini alır ve bu değeri bir sayı olarak dönüştürür. 
    // ProductService ile seçilen ürünün ayrıntılarını getiriyoruz.

    this.productService.getProductById(productId).subscribe((data: any) => { // ANY PRODUCTA DÖNÜŞTÜRÜLECEK !
      this.product = data; // Ürün ayrıntılarını alıp product değişkenine atıyoruz.
    });
  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj).filter(key => key !== 'images' && key !== 'thumbnail');
  }
  
}

// TÜM ÜRÜNLERİN BİLGİLERİNİ GETİRİYOR
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-productdetails',
//   templateUrl: './productdetails.component.html',
//   styleUrls: ['./productdetails.component.css']
// })
// export class ProductDetailsComponent implements OnInit {
//   products: any[] = [];

//   constructor(private productService: ProductService) {} // Servisi enjekte et

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe((data: any) => {
//       this.products = data.products;
//     });
//   }

//   getObjectKeys(obj: any): string[] {
//     return Object.keys(obj);
//   }
// }









