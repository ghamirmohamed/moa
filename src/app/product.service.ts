import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule,Http,Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class ProductService {
  appRoot: string = './assets/products.json';
  results: Object[];
  loading: boolean;
  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }
  search() {
    let promise = new Promise((resolve , reject) => {
    this.http.get(this.appRoot)
      .toPromise()
      .then(res => {
          setTimeout(() => {
            this.results = res.json();
            resolve();
          }, 3000);
          console.log("test timer");

    },
      msg => {
      reject();
      }
    );
    });
    return promise;
  }

}
