import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = environment.apiUrl+"/customers/getall";
    return this.http.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerById(id:number){
    let newPath = environment.apiUrl+"/customers/getbyid?id="+id;
    return this.http.get<SingleResponseModel<Customer>>(newPath);
  }

}
