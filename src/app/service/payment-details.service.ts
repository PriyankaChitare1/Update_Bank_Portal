import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  apiUrl: string = 'http://localhost:3000/paymentsDetails';
  headers = new HttpHeaders().set('content-Type','application/json');

  constructor(private http: HttpClient) { }


}
