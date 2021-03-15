import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  apiUrl: string = 'https://localhost:44340/api';

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"/customers/getall";
    return this.http.get<ListResponseModel<Customer>>(newPath);
  }

}
