import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from '../env/env';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _HttpClient = inject(HttpClient)

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`${env.baseURL}/api/v1/products`)
  }

  getProductDetails(productId:string | null):Observable<any>{
    return this._HttpClient.get( `${env.baseURL}/api/v1/products/${productId}`)
  }


}
