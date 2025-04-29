import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink,TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService)
    private readonly  _ToastrService = inject(ToastrService)

  cartDetails : Icart  = {} as Icart


  private resetCart(): Icart {
    return {
      ...this.cartDetails,
      products: [],
      totalCartPrice: 0
    };
  }

  ngOnInit(): void {



    this._CartService.getProductsCart().subscribe({
      next:(res)=>{
        this.cartDetails = res.data


      }
    })
  }


  removeItem(id:string):void{
    this._CartService.deleteProductFromCart(id).subscribe({
      next:(res)=>{
        this.cartDetails = res.data
        this._ToastrService.success("product removed","Fresh Cart")
        this._CartService.cartNumber.set(res.numOfCartItems)




      }
    })
  }

  updateCount(id:string,newcount:number) :void{
   if(newcount > 0){
    this._CartService.updateProductQuantity(id,newcount).subscribe({
      next:(res)=>{
        this.cartDetails = res.data
        this._ToastrService.success("Quantity updated","Fresh Cart")





      }
    })
   }


  }

  clearCart() :void{

     this._CartService.clearCart().subscribe({
       next:(res)=>{
        console.log(res);

        if (res.message == "success"){
          this.cartDetails = this.resetCart();
        this._ToastrService.success("Cart Deleted","Fresh Cart")
        }

        this._CartService.cartNumber.set(res.numOfCartItems)






       }
     })
    }

    check() : boolean{
      if (this.cartDetails?.products?.length === 0) {
        return true
      }
      else{
        return false
      }

    }



}
