
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    cardCvv:new FormControl('',Validators.maxLength(3)),

  });
  isChecked:boolean=false;
  @Input() rental!:Rental;
  

  constructor(private rentalService:RentalService,
    private toastrService:ToastrService,
    private paymentService:PaymentService) { }


  ngOnInit(): void {
  }

  addRental() {
    if (this.paymentForm.valid) {
      let paymentCard = Object.assign({},this.paymentForm.value)
      this.paymentService.isPaymentSuccess(paymentCard).subscribe(resp=>{
        if (resp.success) {
          this.rentalService.addRental(this.rental).subscribe(response => {
            console.log(JSON.stringify(this.rental));
            console.log(JSON.stringify(this.paymentForm.value));
            if (this.isChecked==true) {
              this.saveCard()
            }
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

  saveCard() {
    if (this.isChecked == true) {
      let cardModel = Object.assign(
        { customerId: Number(this.rental.customerId) },
        this.paymentForm.value
      );
      console.log(cardModel);
      this.paymentService.addPaymentCard(cardModel).subscribe(
        (response) => {
          this.toastrService.success(response.message);
        },
        (responseError) => {
          this.toastrService.error(
            responseError.error.message,
            'Kart Kaydedilemedi'
          );
        }
      );
    }
  }

}
