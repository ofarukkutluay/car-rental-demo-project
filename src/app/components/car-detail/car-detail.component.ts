import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages!: CarImage[];
  car!: CarDto;
  dataLoaded: boolean = false;
  message!: string;

  constructor(private carImageService: CarImageService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {
        let carId = params['carId'];
        this.getCarImagesByCarId(carId);
        this.getCarDetailsById(carId);
      }
    })
  }

  getCarImagesByCarId(id: number) {
    this.carImageService.getCarImagesByCarId(id).subscribe(resp => {
      this.carImages = resp.data;
    })
  }

  getCarDetailsById(id: number) {
    this.carService.getCarDetailsById(id).subscribe(resp => {
      this.car = resp.data[0];
    })
  }
  setImage() {

    for (let i = 0; i < this.carImages.length; i++) {
      const carImage = this.carImages[i];
      if (carImage.imagePath) {
        return environment.staticFilesUrl + carImage.imagePath;
      }
    }
    return environment.staticFilesUrl + "/images/default.jpg";
  }

}
