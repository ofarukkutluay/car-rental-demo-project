import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }


  getCars():Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl+"/cars/getall";
    return this.http.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(id:number){
    let newPath = environment.apiUrl+"/cars/getbyid?carId="+id;
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
  getCarDetailsByBrandAndColor(brandId:number,colorId:number){
    let newPath = environment.apiUrl+"/cars/getcardetailsbybrandandcolor?brandId="+brandId+"&colorId="+colorId
    return this.http.get<ListResponseModel<CarDto>>(newPath)
  }
  addCar(car:Car){
    let newPath = environment.apiUrl+'/cars/add';
    car.brandId=(Number)(car.brandId);
    car.colorId=(Number)(car.colorId);
    car.modelYear=(Number)(car.modelYear);
    car.dailyPrice=(Number)(car.dailyPrice);
    car.findeksScore=(Number)(car.findeksScore);
    return this.http.post<ResponseModel>(newPath,car);
  }
  updateCar(car:Car){
    let newPath = environment.apiUrl+'/cars/update';
    car.brandId=(Number)(car.brandId);
    car.colorId=(Number)(car.colorId);
    car.modelYear=(Number)(car.modelYear);
    car.dailyPrice=(Number)(car.dailyPrice);
    return this.http.post<ResponseModel>(newPath,car);
  }
}
