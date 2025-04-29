import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from '../../core/interfaces/iproducts';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details',
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})


export class DetailsComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
private readonly  _CartService = inject(CartService)
  private readonly  _ToastrService = inject(ToastrService)
  product :Iproducts | null = null


  customOptionsMain: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      autoplay:true,
      autoplaySpeed:1000,
      dots: true,
      navSpeed: 500,
      rtl: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }},
    }
ngOnInit():void  {

  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      let productId = params.get("id")

      this._ProductsService.getProductDetails(productId).subscribe({
        next:(res)=>{
          this.product = res.data

          console.log(res.data);

        },error(err){
          console.log(err);

        }
      })




    },
    error:(err)=>{
      console.log(err);
    }
  })


}


addToCart(id:string):void{
  this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success(res.message,"Fresh Cart")

    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.success(err,"Fresh Cart")


    }

  })
}




}
