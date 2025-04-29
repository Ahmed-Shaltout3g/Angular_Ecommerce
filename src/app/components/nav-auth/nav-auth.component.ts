import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-nav-auth',
  imports: [RouterLink, RouterLinkActive,TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent {

  readonly _AuthService = inject(AuthService);
  private platformId = inject(PLATFORM_ID);
  readonly _TranslationService = inject(TranslationService);
  readonly _TranslateService = inject(TranslateService);

  currentLanguage  = this._TranslateService.currentLang;
  data: string | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.data = localStorage.getItem("userData");
    }
  }

  switchLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'ar' : 'en';
    this._TranslationService.changeLang(newLang);
    this.currentLanguage = newLang;
  }
}
