import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomerModuleLibrary} from './CustomerModuleLibrary';

const platform=platformBrowserDynamic();
platform.bootstrapModule(CustomerModuleLibrary)