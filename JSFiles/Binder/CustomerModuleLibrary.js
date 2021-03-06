"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var CustomerComponent_1 = require("./CustomerComponent");
var forms_1 = require("@angular/forms");
var CustomerModuleLibrary = (function () {
    function CustomerModuleLibrary() {
    }
    return CustomerModuleLibrary;
}());
CustomerModuleLibrary = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [CustomerComponent_1.CustomerComponent],
        bootstrap: [CustomerComponent_1.CustomerComponent]
    })
], CustomerModuleLibrary);
exports.CustomerModuleLibrary = CustomerModuleLibrary;
//# sourceMappingURL=CustomerModuleLibrary.js.map