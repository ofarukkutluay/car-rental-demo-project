import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {

  constructor(private http:HttpClient) { }

  whatFindeksScore(customerId:number){
    let newPath= environment.apiUrl+"/findeks/WhatFindeksScore?customerId="+customerId;
    return this.http.get<SingleResponseModel<number>>(newPath);
  }

}
