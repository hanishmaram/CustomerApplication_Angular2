"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Customer_1 = require("../Model/Customer");
var CustomerComponent = (function () {
    function CustomerComponent() {
        //biinding logic
        this.customerobj = new Customer_1.Customer();
        this.customers = new Array();
    }
    CustomerComponent.prototype.select = function (customer) {
        //this.customerobj=customer;
        this.customerobj = Object.assign({}, customer);
    };
    CustomerComponent.prototype.clear = function () {
        this.customerobj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var cust = _a[_i];
            if (cust.CustomerCode == this.customerobj.CustomerCode) {
                cust.CustomerName = this.customerobj.CustomerName;
                cust.CustomerAmount = this.customerobj.CustomerAmount;
            }
        }
        this.customerobj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Add = function () {
        this.customers.push(this.customerobj);
        this.customerobj = new Customer_1.Customer();
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: "customer-ui",
        templateUrl: "Customer.html"
    })
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map