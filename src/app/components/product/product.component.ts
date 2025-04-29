import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TermPipe } from '../../core/pipes/term.pipe';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Iproducts } from '../../core/interfaces/iproducts';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [TermPipe,RouterLink,SearchPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  private readonly  _ProductsService = inject(ProductsService)
  private readonly  _CartService = inject(CartService)
  private readonly  _ToastrService = inject(ToastrService)

  products :WritableSignal<Iproducts[]> = signal([])

  term:string =""


  ngOnInit() {




    this._ProductsService.getAllProducts().subscribe({
      next : (response)=>{
        this.products.set(response.data)



      }
    })


  }



  addToCart(id:string):void{
    this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message,"Fresh Cart")
        this._CartService.cartNumber.set(res.numOfCartItems)

      }

    })
  }

}
