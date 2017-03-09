import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './card-intro.component.html',
  styleUrls: ['./card-intro.component.css']
})
export class CardIntroComponent implements OnInit {

  frequency:string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;

  message: string;

  constructor() {
      console.log("  constructor before");
    this.frequency="3,000원";
    console.log("  constructor after");
   }

  ngOnInit() {
  }

  getPaymentTotal(){
    console.log("ddddddddddddddddddddddddddddd");
  }

  getToken() {
    this.message = 'Loading...';

    // cardNumber: string;
    // expiryMonth: string;
    // expiryYear: string;
    // cvc: string;
    //http://blog.mgechev.com/2016/07/05/using-stripe-payment-with-angular-2/
    console.log("getToken()",this.cardNumber);
    // (<any>window).Stripe.card.createToken({
    //   number: this.cardNumber,
    //   exp_month: this.expiryMonth,
    //   exp_year: this.expiryYear,
    //   cvc: this.cvc
    // }, (status: number, response: any) => {
    //   if (status === 200) {
    //     this.message = `Success! Card token ${response.card.id}.`;
    //   } else {
    //     this.message = response.error.message;
    //   }
    // });
  }

}
