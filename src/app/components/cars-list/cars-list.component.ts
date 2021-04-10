import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(private carService: CarService) { }


  cars!: CarDto[];
  dataLoaded = false;
  message!: string;
  filterText:string="";
  carId!:number;
  ifAdd:boolean=false;

  ngOnInit(): void {

    this.getCarsDetails();
    
  };

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
      console.log(JSON.stringify(response.data))
    })
    
  };
  createCarId(id:number){
    this.carId = id;
  }
  
  ifAddCar(){
    this.ifAdd = true
  }
}
