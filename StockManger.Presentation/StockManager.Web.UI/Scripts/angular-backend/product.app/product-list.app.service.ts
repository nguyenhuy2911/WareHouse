﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GetProducts_Response } from './product-list.getproducts.response.js';

@Injectable()
export class ProductListService {
    private Url = 'product/get-products';  // URL
    constructor(private http: Http) { }

    getproducts(): Observable<GetProducts_Response> {
        return this.http.get(this.Url)
            .map(this.extractData)
            .catch(this.handleError);
        //.toPromise()
        //// .then(response => response.json().data as GetProduct_Response)
        //.then(this.extractData)
        //.catch(this.handleError);
    }
    //getproducts(): Promise<GetProducts_Response> {
    //    return this.http.get(this.Url)           
    //    .toPromise()       
    //    .then(this.extractData)
    //    .catch(this.handleError);
    //}

    //create(name: string): Observable<Product> {
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: headers });

    //    return this.http.post(this.heroesUrl, { name }, options)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

export class Product {
    constructor(
        public id: number,
        public name: string) { }
}