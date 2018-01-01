import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { ProductCrousselComponent } from './product-croussel/product-croussel.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCrousselComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
