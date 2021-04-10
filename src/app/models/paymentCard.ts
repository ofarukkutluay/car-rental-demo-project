export interface PaymentCard{
    id:number,
    customerId:number,
    nameOnCard:string;
    cardNumber:string;
    cardExpiration:Date;
    cardCvv:number;
}