import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { TextboxComponent } from './textbox/textbox.component';
import { YapilacaklarComponent } from './yapilacaklar/yapilacaklar.component';
import { ToastrModule } from 'ngx-toastr';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { NotificationService } from './notification.service';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    MainpageComponent,
    ProductsComponent,
    ProductDetailsComponent,
    TextboxComponent,
    YapilacaklarComponent,
    TodoComponent,
    CompletedComponent,
    JobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
