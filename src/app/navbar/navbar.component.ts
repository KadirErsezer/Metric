import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedPage(event.url);
      }
    });
  }

  ngOnInit(): void {}

  updateSelectedPage(url: string) {
    const segments = url.split('/');
    const page = segments[segments.length - 1];

    let pageTitle = 'Anasayfa'; // Varsayılan başlığımız

    switch (page) {
      case 'mainpage':
        pageTitle = 'Ana Sayfa';
        break;
      case 'lists':
        pageTitle = 'Yapılacaklar';
        break;
      case 'products':
        pageTitle = 'Ürünler';
        break;
      default:
        pageTitle = 'Ürün Detayları';
        break;
    }

    this.titleService.setTitle(pageTitle); // Sayfa başlığını günceller
  }
}









// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   selectedPage: string = 'Anasayfa'; // Varsayılan olarak "Anasayfa"

//   constructor(private router: Router) {
//     router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         this.updateSelectedPage(event.url);
//       }
//     });
//   }

//   ngOnInit(): void {}

//   updateSelectedPage(url: string) {
//     const segments = url.split('/');
//     const page = segments[segments.length - 1];

//     switch (page) {
//       case 'mainpage':
//         this.selectedPage = 'Ana Sayfa';
//         break;
//       case 'lists':
//         this.selectedPage = 'Yapılacaklar';
//         break;
//       case 'products':
//         this.selectedPage = 'Ürünler';
//         break;
//       default:
//         this.selectedPage = 'Anasayfa';
//     }
//   }
// }

