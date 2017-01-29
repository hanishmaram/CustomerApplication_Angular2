import {Component} from '@angular/core';
import {Customer} from '../Model/Customer';

@Component({
    selector:"customer-ui",
    templateUrl:"Customer.html"
})
export class CustomerComponent{
    //biinding logic
    customerobj:Customer=new Customer();
    customers:Array<Customer>=new Array<Customer>();

    select(customer:Customer){
        //this.customerobj=customer;
        this.customerobj=Object.assign({},customer);
    }
    clear(){
        this.customerobj=new Customer();
    }
    update(){
        for(let cust of this.customers){
            if(cust.CustomerCode==this.customerobj.CustomerCode)
            {
                cust.CustomerName=this.customerobj.CustomerName;
                cust.CustomerAmount=this.customerobj.CustomerAmount;
            }
        }

        this.customerobj=new Customer();
    }
    Add(){
        this.customers.push(this.customerobj);
        this.customerobj=new Customer();
    }
}