import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }
  
  getBrands(){
    let newPath = environment.apiUrl+'/brands/getall';
    return this.http.get<ListResponseModel<Brand>>(newPath);
  }
  getBrand(id:number){
    let newPath = environment.apiUrl+'/brands/getbyid?id='+id;
    return this.http.get<ListResponseModel<Brand>>(newPath);
  }
}
