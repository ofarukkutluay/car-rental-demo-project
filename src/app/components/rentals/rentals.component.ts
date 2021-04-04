import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  constructor(private rentalService:RentalService) { }
  rentals!:RentalDto[];
  message!:string;
  dataLoaded:boolean=false;

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentals=response.data;
      this.dataLoaded=response.success;
      this.message=response.message;
    })
  }

}
