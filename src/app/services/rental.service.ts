import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = environment.apiUrl + "/rentals/getall";
    return this.http.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalDetails(): Observable<ListResponseModel<RentalDto>> {
    let newPath = environment.apiUrl + "/rentals/getrentaldetails";
    return this.http.get<ListResponseModel<RentalDto>>(newPath);
  }
  addRental(rental: Rental):Observable<ResponseModel> {
    let newPath = environment.apiUrl + "/rentals/add";
    rental.carId=(Number)(rental.carId); //400 hatası sebebiyle muhtemel tip dönüşümü sorunu için 
    rental.customerId=(Number)(rental.customerId);
    return this.http.post<ResponseModel>(newPath, rental)
  }
}
