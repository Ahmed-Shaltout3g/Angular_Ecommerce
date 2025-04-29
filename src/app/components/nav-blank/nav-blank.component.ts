import { Component, computed, inject, OnInit, PLATFORM_ID, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  imports: [RouterLink, RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
  readonly _AuthService = inject(AuthService);
  readonly _TranslationService = inject(TranslationService);
  readonly _TranslateService = inject(TranslateService);
  readonly _CartService = inject(CartService);


  cartNumber :Signal<number> = computed(()=> this._CartService.cartNumber())
  currentLanguage  = this._TranslateService.currentLang;

  private platformId = inject(PLATFORM_ID);
  data: string | null = null;



  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.data = localStorage.getItem("userData");

      if(this.data){
        if (this._AuthService.userData()){
        this._CartService.getProductsCart().subscribe({
          next:(res)=>{
            this._CartService.cartNumber.set(res.numOfCartItems)
            console.log(res);

          }
        })
}
      }

    }

  }


  switchLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'ar' : 'en';
    this._TranslationService.changeLang(newLang);
    this.currentLanguage = newLang;
  }
}
