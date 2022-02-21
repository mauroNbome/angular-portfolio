import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  mobileSize: boolean;
  // Variable to handle current activeLink
  activeLink: string = '';
  colorMode: string = 'light';

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
}
