import { Injectable } from '@angular/core';
import { languages } from '../../components/header/header.data';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang: string;
  activeLang: any;
  constructor(private translate: TranslateService) {}

  // Handling of languages.
  changeLang(event: string): void {
    this.lang = event;
    this.saveLangToLS();
    this.setFlag();
    this.translate.use(event);
  }

  setLangFromLS(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.setFlag();
  }

  saveLangToLS(): void {
    localStorage.setItem('lang', this.lang);
  }

  setFlag(): void {
    languages.forEach((el) => {
      if (el.value === this.lang) {
        this.activeLang = el;
      }
    });
  }
}
