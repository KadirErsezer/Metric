import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { YapilacaklarComponent } from './yapilacaklar/yapilacaklar.component';
import { TextboxComponent } from './textbox/textbox.component';


const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, // Anasayfada '/todos' sayfasına yönlendir
  { path: 'mainpage', component: MainpageComponent},
  { path: 'lists', component: ListComponent},
  { path: 'yap', component: YapilacaklarComponent},
  { path: 'text', component: TextboxComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailsComponent}
  // { path: '', redirectTo: '/products', pathMatch: 'full' }
  // { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

