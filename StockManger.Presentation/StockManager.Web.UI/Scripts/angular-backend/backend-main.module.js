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
const backend_main_component_js_1 = require("./backend-main.component.js");
const dashboard_component_js_1 = require("./dashboard.app/dashboard.component.js");
const product_list_app_service_js_1 = require("./product.app/product-list.app.service.js");
const product_app_component_js_1 = require("./product.app/product.app.component.js");
const product_list_app_component_js_1 = require("./product.app/product-list.app.component.js");
const backend_main_routing_module_js_1 = require("./backend-main.routing.module.js");
let BackEndModule = class BackEndModule {
};
BackEndModule = __decorate([
    core_1.NgModule({
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            product_list_app_service_js_1.ProductListService
        ],
        //   schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            platform_browser_1.BrowserModule, backend_main_routing_module_js_1.AppRoutingModule,
            http_1.HttpModule,
            ng2_smart_table_1.Ng2SmartTableModule
        ],
        declarations: [
            backend_main_component_js_1.MainAdminComponent,
            dashboard_component_js_1.DashboardComponent,
            product_app_component_js_1.ProductAppComponent,
            product_list_app_component_js_1.ProductListComponent
        ],
        bootstrap: [backend_main_component_js_1.MainAdminComponent]
    })
], BackEndModule);
exports.BackEndModule = BackEndModule;
//# sourceMappingURL=backend-main.module.js.map