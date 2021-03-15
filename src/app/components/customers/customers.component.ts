import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  customers!:Customer[];
  message!:string;
  dataLoaded:boolean=false;

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data;
      this.message = response.message;
      this.dataLoaded = response.success;
    })
  }

}
