"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
let ProductListService = class ProductListService {
    constructor(http) {
        this.http = http;
        this.Url = 'product/get-products'; // URL
    }
    getproducts() {
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
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
};
ProductListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductListService);
exports.ProductListService = ProductListService;
class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.Product = Product;
//# sourceMappingURL=product-list.app.service.js.map