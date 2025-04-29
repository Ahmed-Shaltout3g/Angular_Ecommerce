import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-orders',
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {



  messageErorr :string = ""
  isLoading :boolean = false

  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _OrderService = inject(OrderService)


  cartId:string | null = ""


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.cartId = params.get('id')

      }
    })

  }


  ordersForm :FormGroup = this._FormBuilder.group({
    details:[null,[Validators.required]],
    city:[null,[Validators.required]],
    phone:[null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]

  })

  submitordersForm(){
    this._OrderService.checkOut(this.cartId,this.ordersForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if (res.status == "success") {
          window.open(res.session.url,"_self")

        }

      },error:(err)=>{
        console.log(err);

      }
    })

  }
}
