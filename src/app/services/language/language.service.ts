import { Injectable } from '@angular/core';
import { languages } from '../../components/header/header.data';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang: string;
  activeLang: any;
  constructor() {}

  // Handling of languages.
  changeLang(event: string): void {
    this.lang = event;
    this.saveLangToLS();
    this.setFlag();
    window.location.reload();
  }

  setLangFromLS(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.setFlag();
  }

  saveLangToLS(): void {
    localStorage.setItem('lang', this.lang);
  }

  setFlag(): void {
    console.log(languages);
    languages.forEach((el) => {
      if (el.value === this.lang) {
        this.activeLang = el;
      }
    });
  }
}
