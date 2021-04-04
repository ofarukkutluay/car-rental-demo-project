import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentCard } from '../models/paymentCard';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  isPaymentSuccess(paymentCard:PaymentCard){
    let newPath = environment.apiUrl+"/payment/ispaymentsuccess";
    paymentCard.cardCvv=(Number)(paymentCard.cardCvv)
    return this.http.post<ResponseModel>(newPath,paymentCard)
  }
}
