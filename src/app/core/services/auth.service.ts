import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import env from '../env/env';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _HttpClient = inject (HttpClient)
  private readonly _Router = inject (Router)

  userData :WritableSignal<any> = signal(null)




  setRegisterForm(data:object): Observable <any> {

    return this._HttpClient.post(`${env.baseURL}/api/v1/auth/signup`,data)

  }

  setLoginForm(data:object): Observable <any> {

    return this._HttpClient.post(`${env.baseURL}/api/v1/auth/signin`,data)

  }



  saveUserData():void{
    const token = localStorage.getItem("userData");
    if (token) {
      this.userData.set(jwtDecode(token));
    }
  }


  logOut():void{
    localStorage.removeItem("userData");
    this.userData.set(null);
    this._Router.navigate(["/login"])

  }





  setEmailVerify(data:object): Observable <any> {

    return this._HttpClient.post(`${env.baseURL}/api/v1/auth/forgotPasswords`,data)

  }

  setCodeVerify(data:object): Observable <any> {

    return this._HttpClient.post(`${env.baseURL}/api/v1/auth/verifyResetCode`,data)

  }

  setResetPassword(data:object): Observable <any> {

    return this._HttpClient.put(`${env.baseURL}/api/v1/auth/resetPassword`,data)

  }
}
