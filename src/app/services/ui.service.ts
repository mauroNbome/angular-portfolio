import { Injectable, OnInit } from '@angular/core';
import { languages } from '../components/header/header.data';

@Injectable({
  providedIn: 'root',
})
export class UiService implements OnInit {
  mobileSize: boolean;
  // Variable to handle current activeLink
  activeLink: string = '';

  colorMode: string = 'light';

  lang: string;
  activeLang: any;

  constructor() {}

  ngOnInit(): void {
    // setLangFromLS()
    // setColorModeFromLS()
    // Are called from header component.
  }

  // Handling of darkmode
  toggleColorMode(): void {
    if (this.colorMode === 'dark') {
      this.colorMode = 'light';
    } else {
      this.colorMode = 'dark';
    }
    this.saveColorModeToLS();
  }

  changeColorMode(event: string): void {
    this.colorMode = event;
    this.saveColorModeToLS();
  }

  setColorModeFromLS(): void {
    this.colorMode = localStorage.getItem('cm') || 'dark';
  }

  saveColorModeToLS(): void {
    localStorage.setItem('cm', this.colorMode);
  }

  // Handling of languages.
  changeLang(event: string): void {
    this.lang = event;
    this.saveLangToLS();
    this.setFlag();
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
