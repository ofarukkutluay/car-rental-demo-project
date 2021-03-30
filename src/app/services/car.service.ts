import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }


  getCars():Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl+"/cars/getall";
    return this.http.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetails():Observable<ListResponseModel<CarDto>>{
    let newPath = environment.apiUrl+"/cars/getcardetail";
    return this.http.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailsById(id:number):Observable<ListResponseModel<CarDto>>{
    let newPath = environment.apiUrl+"/cars/getcardetailsbyid?carId="+id;
    return this.http.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailsByBrandId(id:number){
    let newPath = environment.apiUrl+"/cars/getcardetailsbybrandid?brandId="+id;
    return this.http.get<ListResponseModel<CarDto>>(newPath)
  }
  getCarDetailsByColorId(id:number){
    let newPath = environment.apiUrl+"/cars/getcardetailsbycolorid?colorId="+id;
    return this.http.get<ListResponseModel<CarDto>>(newPath)
  }
}
