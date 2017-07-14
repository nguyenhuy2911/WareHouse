import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'my-app',
    templateUrl: "/home/main-template"
})
export class MainAdminComponent {
    ngOnInit(): any {
        
       
    }
    ngAfterViewInit() {
        jQuery.getScript('Template/Admin/AdminBSBMaterial/js/admin.js');
        
    }

}