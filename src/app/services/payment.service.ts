import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
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

  addPaymentCard(paymentCard:PaymentCard){
    let newPath =environment.apiUrl +"/payment/add";
    return this.http.post<ResponseModel>(newPath,paymentCard)
  }

  getCustomerPaymentCard(id:number){
    let newPath = environment.apiUrl+"/payment/getbycustomerid?customerid="+id;
    return this.http.get<ListResponseModel<PaymentCard>>(newPath);
  }
}
