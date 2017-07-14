import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
    selector: 'dashboard',
    templateUrl: '/dash-board',
})
export class DashboardComponent implements OnInit {
    ngOnInit(): any {
       
    }
    ngAfterViewInit() {
        jQuery.getScript('Template/Admin/AdminBSBMaterial/plugins/chartjs/Chart.bundle.js');
        jQuery.getScript('Template/Admin/AdminBSBMaterial/js/pages/charts/chartjs.js')
    }
}
