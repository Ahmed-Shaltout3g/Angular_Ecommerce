import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Iproducts } from '../../core/interfaces/iproducts';
import { ProductsService } from '../../core/services/products.service';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategories } from '../../core/interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { TermPipe } from '../../core/pipes/term.pipe';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  imports: [CarouselModule,TermPipe,RouterLink,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private readonly  _ProductsService = inject(ProductsService)
  private readonly  _CategoriesService = inject(CategoriesService)
  private readonly  _CartService = inject(CartService)
  private readonly  _ToastrService = inject(ToastrService)


  products :WritableSignal<Iproducts[]> = signal([])
  categories :WritableSignal<Icategories[]> = signal([])


   // slider categories
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl:true,
    autoplay:true,
    autoplaySpeed:1000,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  // slider main
  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl:true,
    autoplay:true,
    autoplaySpeed:1000,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
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
    nav: true
  }



  ngOnInit() {




    this._ProductsService.getAllProducts().subscribe({
      next : (response)=>{
        this.products.set(response.data)



      }
    })


    this._CategoriesService.getAllcategories().subscribe({
      next : (response)=>{
        this.categories.set(response.data)



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
