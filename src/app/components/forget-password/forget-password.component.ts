import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  messageErorr :string = ""
  isLoading :boolean = false
  step:number = 1;
    private readonly _FormBuilder = inject(FormBuilder);
    private readonly _AuthService = inject(AuthService);
    private readonly _Router = inject(Router)


    verifyForm :FormGroup = this._FormBuilder.group({
      email:[null,[Validators.required, Validators.email]],

    })

    verifyCodeForm :FormGroup = this._FormBuilder.group({
      resetCode:[null,[Validators.required, Validators.pattern(/^\w{6}$/)]],

    })

    restPasswordForm :FormGroup = this._FormBuilder.group({
      email:[null,[Validators.required, Validators.email]],
      newPassword:[null,[Validators.required, Validators.pattern(/^\w{8,}$/)]],
    })


    verifyEmailSubmit():void{
      let email = this.verifyForm.get("email")?.value
      this.restPasswordForm.get("email")?.patchValue(email)
      this.isLoading = true

      this._AuthService.setEmailVerify(this.verifyForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false

          if (res.statusMsg === "success"){
            this.step = 2

          }



        },
        error:(err:HttpErrorResponse)=>{
          this.messageErorr = err.error.message
          this.isLoading = false

        }

      })

    }

    verifyCodeSubmit():void{
      this.isLoading = true

      console.log(this.verifyCodeForm.value);

      this._AuthService.setCodeVerify(this.verifyCodeForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false

          if (res.status === "Success"){
            this.step = 3

          }



        },
        error:(err:HttpErrorResponse)=>{
          this.messageErorr = err.error.message
          this.isLoading = false

        }

      })

    }

    resetPasswordSubmit():void{
      this.isLoading = true

      this._AuthService.setResetPassword(this.restPasswordForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false

          localStorage.setItem("userData",res.token)
          this._AuthService.saveUserData()
      this._Router.navigate(["/home"])




        },
        error:(err:HttpErrorResponse)=>{
          this.messageErorr = err.error.message
          this.isLoading = false

        }

      })

    }
}
