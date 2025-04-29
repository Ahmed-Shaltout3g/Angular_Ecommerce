import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import env from '../env/env';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private  _HttpClient:HttpClient) { }



  checkOut(id:string | null,shappingDetails:object): Observable <any> {

    return this._HttpClient.post(`${env.baseURL}/api/v1/orders/checkout-session/${id}?url=${env.URLServer}`,{
      "shippingAddress":shappingDetails
    },

  )

  }
}
