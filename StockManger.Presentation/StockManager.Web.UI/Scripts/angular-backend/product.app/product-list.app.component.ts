import { Component, OnInit } from '@angular/core';

import { ProductListService } from './product-list.app.service.js';
import { GetProducts_Response } from './product-list.getproducts.response.js';
import { GetProduct_DTO } from './product-list.getproducts.response.js';

@Component({
    selector: 'product-form-list',
    templateUrl: '/product/product-form-list'

})
export class ProductListComponent implements OnInit {
    settings = {
        columns: {
            Product_ID: {
                title: 'ID'
            },
            Product_Name: {
                title: 'Full Name'
            }
        }
    };
    errorMessage: string;
    data: GetProduct_DTO[]; //GetProducts_Response;
    totalrow: number;
    constructor(private productListService: ProductListService) { }
    ngOnInit() {
        this.getProductList();
    }
    //ngOnInit() { this.name = "Huy" }

    getProductList() {
        return this.productListService.getproducts()
            .subscribe(response => { this.data = response.Results, this.totalrow = response.TotalRow },
            error => this.errorMessage = <any>error);

    }
    //getProductList() {
    //    return this.productListService.getproducts()
    //        .then(response => { this.data = response.Results, this.totalrow = response.TotalRow });
    //}

}



