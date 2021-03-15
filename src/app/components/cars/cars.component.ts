import { Component, OnInit } from '@angular/core';

import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars!:CarDto[];
  message!:string;
  dataLoaded:boolean=false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsDetails();
  }

  getCarsDetails(){
    this.carService.getCarsDetails().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=response.success;
      this.message=response.message;
    })
  }


  

}
