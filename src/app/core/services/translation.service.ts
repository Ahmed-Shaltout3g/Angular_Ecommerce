import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this._PLATFORM_ID);
  private readonly renderer: Renderer2;

  constructor(
    private translateService: TranslateService,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    if (this.isBrowser) {
      this.initTranslation();
    }
  }

  private initTranslation(): void {
    this.translateService.setDefaultLang('en');
    const savedLang = localStorage.getItem('lang') || 'en';
    this.translateService.use(savedLang);
    this.setDirection(savedLang);
  }

  changeLang(lang: string): void {
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
    this.translateService.use(lang);
    this.setDirection(lang);
  }

  private setDirection(lang: string): void {
    if (this.isBrowser) {
      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.renderer.setAttribute(document.documentElement, 'dir', dir);
      this.renderer.setAttribute(document.documentElement, 'lang', lang);
    }
  }
}
