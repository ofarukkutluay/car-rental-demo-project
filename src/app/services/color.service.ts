import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {


  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://localhost:44340/api';

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + '/colors/getall';
    return this.http.get<ListResponseModel<Color>>(newPath);
  }

}
