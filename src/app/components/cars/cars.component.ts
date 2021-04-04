import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: CarDto[]=[];
  message!: string;
  dataLoaded: boolean = false;
  filterText!: "";

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    console.log(this.cars)
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"] && params["colorId"]) {
        this.getCarDetailsByBrandAndColor(params["brandId"],params["colorId"]);
      }else if (params["brandId"]) {
        let brandId:number=params["brandId"]
        this.getCarDetailsByBrandId(brandId)
      }else if(params["colorId"]){  
        let colorId:number=params["colorId"]
        this.getCarDetailsByColorId(colorId)
      }else{
        this.getCarsDetails();
      }
      
    })
    
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
    })
  }

  getCarDetailsByBrandId(id:number){
    this.carService.getCarDetailsByBrandId(id).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
    })
  }
  
  getCarDetailsByColorId(id:number){
    this.carService.getCarDetailsByColorId(id).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
    })
  }

  getCarDetailsByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarDetailsByBrandAndColor(brandId,colorId).subscribe(resp=>{
      this.cars=resp.data;
      this.dataLoaded = resp.success;
      this.message = resp.message;
    })
  }

  setImage(car: CarDto) {
    if (car.imagePath) {
      return environment.staticFilesUrl + car.imagePath;
    }
    return environment.staticFilesUrl + "/images/default.jpg";
  }

}
