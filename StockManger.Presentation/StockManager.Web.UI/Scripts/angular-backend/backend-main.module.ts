import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MainAdminComponent } from "./backend-main.component.js"

import { DashboardComponent } from "./dashboard.app/dashboard.component.js";

import { ProductListService } from './product.app/product-list.app.service.js';
import { ProductAppComponent } from "./product.app/product.app.component.js";
import { ProductListComponent } from "./product.app/product-list.app.component.js";


import { AppRoutingModule } from './backend-main.routing.module.js';

@NgModule({
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ProductListService
    ],
 //   schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule, AppRoutingModule,
        HttpModule,
        Ng2SmartTableModule
    ],
    declarations: [
        MainAdminComponent,
        DashboardComponent,
        ProductAppComponent,
        ProductListComponent
    ],

    bootstrap: [MainAdminComponent]
})
export class BackEndModule { }