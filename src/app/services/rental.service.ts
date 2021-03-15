import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http:HttpClient) { }

  apiUrl: string = 'https://localhost:44340/api';

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"/rentals/getall";
    return this.http.get<ListResponseModel<Rental>>(newPath);
  }
}
