import { Injectable, OnInit } from '@angular/core';
import { languages } from '../components/header/header.data';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  mobileSize: boolean;
  // Variable to handle current activeLink
  activeLink: string = '';

  colorMode: string = 'light';

  lang: string;
  activeLang: any;

  constructor() {}

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

  setActiveLinkFromURL(): void {
    let currentPath = window.location.pathname.substring(1);
    this.activeLink = currentPath;
  }
}
