import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/service/payment-details.service';
import { PaymentDetalis } from 'src/app/module/paymentDetalis';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  payments: any[]=[]; 
    
  constructor(private paymentDetailsService:PaymentDetailsService) { }

  ngOnInit(): void {
    let paymentObj = this.paymentDetailsService.getPaymentDetailsList();
    paymentObj.subscribe((response: any) => {
      this.payments = response;
    });
  }
  }




