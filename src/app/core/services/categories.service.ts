import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import env from '../env/env';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly _HttpClient = inject(HttpClient)

  getAllcategories():Observable<any>{
    return this._HttpClient.get(`${env.baseURL}/api/v1/categories`)
  }

  getCategoriesDetails(id : string | null):Observable<any>{
    return this._HttpClient.get(`${env.baseURL}/api/v1/categories/${id}`)
  }
}
