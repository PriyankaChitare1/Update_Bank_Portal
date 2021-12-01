import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/service/payment-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "angulat-service-app";

  PaymentDetailsList : any =[];

  constructor(private paymentDetailsService:PaymentDetailsService) { }

  ngOnInit(): void {
    
  }

  

}
