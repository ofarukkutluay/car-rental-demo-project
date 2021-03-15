import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }
  apiUrl: string = 'https://localhost:44340/api';
  getBrands(){
    let newPath = this.apiUrl+'/brands/getall';
    return this.http.get<ListResponseModel<Brand>>(newPath);

  }
}
