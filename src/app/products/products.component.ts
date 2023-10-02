// STEP 4 (WORKING)
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Servisi içe aktar

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {} // Servisi enjekte et

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  getObjectKeys(obj: any): string[] { 
    return Object.keys(obj); // Bunu yazmasan productdetails.component.html sayfasına görüntülemek istediğin ürün bilgilerini tek tek elle yazman gerekir.
  }
}




// STEP 2 (WORKING)
// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service'; // Servisi içe aktar

//    @Component({
//      selector: 'app-products',
//      templateUrl: './products.component.html',
//      styleUrls: ['./products.component.css'],
//    })
//    export class ProductsComponent implements OnInit {
//      products: any[] = [];

//      constructor(private productService: ProductService) {} // Servisi enjekte et

//      ngOnInit(): void {
//        this.productService.getProducts().subscribe((data: any) => {
//          this.products = data.products;
//        });
//      }
//    }




// STEP 1
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
// })
// export class ProductsComponent {
//   products: any[] = [];

//   constructor(private router: Router) {}

//   // Ürün detaylarını göstermek için yönlendirme yapar
//   showProductDetails(product: any) {
//     // Ürünün detaylarını göstermek için ProductDetails sayfasına yönlendirme yapar
//     this.router.navigate(['/product', product.id]);
//   }
// }

// STEP 3
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'; // Router'ı ekle
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   products: any[] = [];

//   constructor(
//     private productService: ProductService,
//     private router: Router // Router'ı enjekte et
//   ) {}

//   ngOnInit(): void {
//     // Ürünleri getirme kodu burada bulunur
//   }

//   // Ürün detaylarını göstermek için bu fonksiyonu kullan
//   showProductDetails(product: number) {
//     // Ürün detayları sayfasına yönlendirme yap ve productId'yi iletişim için kullan
//     this.router.navigate(['/productdetails', productId]);
//   }
// }