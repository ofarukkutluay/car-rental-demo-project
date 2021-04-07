import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {


  constructor(private http: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = environment.apiUrl + '/colors/getall';
    return this.http.get<ListResponseModel<Color>>(newPath);
  }
  addColor(color:Color){
    let newPath = environment.apiUrl+'/colors/add';
    return this.http.post<ResponseModel>(newPath,color);
  }
  updateColor(color:Color){
    let newPath = environment.apiUrl+'/colors/update';
    color.id=(Number)(color.id)
    return this.http.post<ResponseModel>(newPath,color);
  }

}
