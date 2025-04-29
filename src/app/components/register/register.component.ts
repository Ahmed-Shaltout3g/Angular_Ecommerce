import { Component, inject } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  messageErorr :string = ""
  isLoading :boolean = false


  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router)




  registerForm :FormGroup = this._FormBuilder.group({
    name:[null,[Validators.required, Validators.minLength(3),Validators.max(30)]],
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.required, Validators.pattern(/^\w{8,}$/)]],
    rePassword:[null,[Validators.required]],
    phone:[null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]

  },{validators : this.confirmPassword})



  // registerForm = new FormGroup({
  //   name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.max(30)]),
  //   email:new FormControl(null,[Validators.required, Validators.email]),
  //   password:new FormControl(null,[Validators.required, Validators.pattern(/^\w{8,}$/)]),
  //   rePassword:new FormControl(null,[Validators.required]),
  //   phone:new FormControl(null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  // },this.confirmPassword)



  confirmPassword(g:AbstractControl){
    return g.get("password")?.value == g.get("rePassword")?.value ?
    null : {missMatch :true}
  }
  submitRegisterForm():void{
    this.isLoading = true
    if (this.registerForm.valid){

      this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
        next:(response)=>{
          console.log(response);
    this.isLoading = false;
    if (response.message == "success")
    {
      this._Router.navigate(["/login"])

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
      this.registerForm.markAllAsTouched()
    }

  }

}
