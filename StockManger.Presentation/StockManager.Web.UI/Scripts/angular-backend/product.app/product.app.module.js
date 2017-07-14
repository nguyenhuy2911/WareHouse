"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const common_1 = require("@angular/common");
const http_1 = require("@angular/http");
const ng2_smart_table_1 = require("ng2-smart-table");
const product_list_app_service_js_1 = require("./product-list.app.service.js");
const product_app_component_js_1 = require("./product.app.component.js");
const product_list_app_component_js_1 = require("./product-list.app.component.js");
let ProductAppModule = class ProductAppModule {
};
ProductAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng2_smart_table_1.Ng2SmartTableModule
        ],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            product_list_app_service_js_1.ProductListService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [
            product_app_component_js_1.ProductAppComponent,
            product_list_app_component_js_1.ProductListComponent
        ],
        bootstrap: [product_app_component_js_1.ProductAppComponent]
    })
], ProductAppModule);
exports.ProductAppModule = ProductAppModule;
//# sourceMappingURL=product.app.module.js.map