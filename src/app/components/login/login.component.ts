import { Component, inject } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  messageErorr :string = ""
  isLoading :boolean = false


  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router)




  loginForm :FormGroup = this._FormBuilder.group({
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.required, Validators.pattern(/^\w{8,}$/)]],

  })






  submitLoginForm():void{
    this.isLoading = true
    if (this.loginForm.valid){

      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next:(response)=>{

          this.isLoading = false;
    if (response.message == "success")
    {

      localStorage.setItem("userData",response.token)
          this._AuthService.saveUserData()
      this._Router.navigate(["/home"])

    }



        },
        error:(error :HttpErrorResponse)=>{

          this.messageErorr = error.error.message
          this.isLoading = false


        }
      })
    }
    else{
      this.isLoading =false
      this.loginForm.markAllAsTouched()
    }

  }


}
