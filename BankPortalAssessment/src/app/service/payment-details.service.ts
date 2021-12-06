import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http: HttpClient) { }
  
  getPaymentDetailsList(){
    let  apiUrl = 'https://api.jsonbin.io/b/61a9ae9401558c731ccd4d3b';
    return this.http.get(apiUrl);
  }

}
