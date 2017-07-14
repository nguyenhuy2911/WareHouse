import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { BackEndModule } from './backend-main.module.js'
import { ProductAppComponent } from './product.app/product.app.component.js';


platformBrowserDynamic().bootstrapModule(BackEndModule);