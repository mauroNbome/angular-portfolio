import { Component, OnInit } from '@angular/core';
import { SidenavService } from '.././sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lang: string;
  colorMode: string = 'light';
  constructor(private SidenavService: SidenavService) {}

  ngOnInit(): void {
    this.setLangFromLS();
    this.setColorModeFromLS();
  }

  toggleSidenav(): void {
    this.SidenavService.isOpened = !this.SidenavService.isOpened;
  }

  // Handling of languages.
  changeLang(event: string): void {
    this.lang = event;
    this.saveLangToLS();
  }

  setLangFromLS(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  saveLangToLS(): void {
    localStorage.setItem('lang', this.lang);
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
}
