import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private http:HttpClient) { }

  getCarImagesByCarId(id:number){
    let newPath = environment.apiUrl+"/carimages/GetCarImagesByCarId?carId="+id;
    return this.http.get<ListResponseModel<CarImage>>(newPath)
  }
}
