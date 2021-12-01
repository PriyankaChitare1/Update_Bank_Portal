import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/service/payment-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private paymentDetailsService:PaymentDetailsService) { }

  ngOnInit(): void {
  }

}
