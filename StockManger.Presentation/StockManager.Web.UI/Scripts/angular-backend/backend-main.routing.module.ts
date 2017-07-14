import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.app/dashboard.component.js';
import { ProductAppComponent } from './product.app/product.app.component.js';

const leftMenu: Routes = [
    { path: '', redirectTo: '/dash-board', pathMatch: 'full' },
    { path: 'dash-board', component: DashboardComponent },
    { path: 'products', component: ProductAppComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(leftMenu)],
    exports: [RouterModule]
})
export class AppRoutingModule { }