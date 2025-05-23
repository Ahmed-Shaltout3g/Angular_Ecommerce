import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import env from '../env/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor() { }


  private readonly _HttpClient = inject(HttpClient)

  getAllBrands():Observable<any>{
    return this._HttpClient.get(`${env.baseURL}/api/v1/brands`)
  }

}
