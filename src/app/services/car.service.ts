import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  apiUrl: string = 'https://localhost:44340/api';

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/cars/getall";
    return this.http.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetails():Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl+"/cars/getcardetail";
    return this.http.get<ListResponseModel<CarDto>>(newPath);
  }
}
