import { HttpClient } from '@angular/common/http';
import {Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import env from './../env/env';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private  _HttpClient:HttpClient) { }

  cartNumber :WritableSignal <number> = signal(0)



  addProductToCart(id:string): Observable <any> {

      return this._HttpClient.post(`${env.baseURL}/api/v1/cart`,
        {
          productId:id
        },

      )

    }


    getProductsCart(): Observable <any> {

      return this._HttpClient.get(`${env.baseURL}/api/v1/cart`,


      )

    }

    deleteProductFromCart(id :string): Observable <any> {

      return this._HttpClient.delete(`${env.baseURL}/api/v1/cart/${id}`,


      )

    }


    updateProductQuantity(id :string ,newCount:number): Observable <any> {

      return this._HttpClient.put(`${env.baseURL}/api/v1/cart/${id}`,
        {
          "count" : newCount
        },


      )

    }


    clearCart(): Observable <any> {

      return this._HttpClient.delete(`${env.baseURL}/api/v1/cart`,


      )

    }

}
