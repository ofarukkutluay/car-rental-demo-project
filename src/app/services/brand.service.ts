import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

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

  addBrand(brand:Brand){
    let newPath = environment.apiUrl+'/brands/add';
    return this.http.post<ResponseModel>(newPath,brand);
  }
  updateBrand(brand:Brand){
    let newPath = environment.apiUrl+'/brands/update';
    brand.id=(Number)(brand.id)
    return this.http.post<ResponseModel>(newPath,brand);
  }
}
