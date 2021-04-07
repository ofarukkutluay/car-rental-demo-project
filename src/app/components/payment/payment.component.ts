import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentCard } from 'src/app/models/paymentCard';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm =new FormGroup({
    nameOnCard:new FormControl('',Validators.required),
    cardNumber: new FormControl('',Validators.maxLength(16)),
    cardExpiration: new FormControl(''),
    cardCvv:new FormControl('',Validators.maxLength(3))
  });
  @Input() rental!:Rental;
  

  constructor(private rentalService:RentalService,
    private toastrService:ToastrService,
    private paymentService:PaymentService) { }


  ngOnInit(): void {
  }

  addRental() {
    if (this.paymentForm.valid) {
      this.paymentService.isPaymentSuccess(this.paymentForm.value).subscribe(resp=>{
        if (resp.success) {
          this.rentalService.addRental(this.rental).subscribe(response => {
            console.log(JSON.stringify(this.rental));
            console.log(JSON.stringify(this.paymentForm.value))
            
            this.toastrService.success(response.message, "Başarılı");
          }, responseError => {
            if (responseError.error.ValidationErrors.length > 0) {
              for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
                this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage
                  , "Doğrulama hatası")
              }
            }
          })
        }else{
          this.toastrService.error("Kart Bilgileri Hatalı!!!", "Dikkat")
        }
      })
      
    } else {
      this.toastrService.error("Kart Bilgileri eksik", "Dikkat")
    }
  }

}
