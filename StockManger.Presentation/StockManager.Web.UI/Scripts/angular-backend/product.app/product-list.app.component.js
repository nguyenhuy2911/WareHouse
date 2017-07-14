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
const product_list_app_service_js_1 = require("./product-list.app.service.js");
let ProductListComponent = class ProductListComponent {
    constructor(productListService) {
        this.productListService = productListService;
        this.settings = {
            columns: {
                Product_ID: {
                    title: 'ID'
                },
                Product_Name: {
                    title: 'Full Name'
                }
            }
        };
    }
    ngOnInit() {
        this.getProductList();
    }
    //ngOnInit() { this.name = "Huy" }
    getProductList() {
        return this.productListService.getproducts()
            .subscribe(response => { this.data = response.Results, this.totalrow = response.TotalRow; }, error => this.errorMessage = error);
    }
};
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-form-list',
        templateUrl: '/product/product-form-list'
    }),
    __metadata("design:paramtypes", [product_list_app_service_js_1.ProductListService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.app.component.js.map