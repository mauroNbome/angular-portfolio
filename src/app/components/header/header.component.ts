import { Component, OnInit } from '@angular/core';
import { SidenavService } from '.././sidenav/sidenav.service';
import { Links } from '../../models/header.models';
import { Router } from '@angular/router';
import { links } from './header.data';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lang: string;
  languages = [
    { label: 'Español', value: 'es', img: '../../../assets/flags/es.svg' },
    { label: 'English', value: 'en', img: '../../../assets/flags/gb.svg' },
    { label: 'Portuguese', value: 'pt', img: '../../../assets/flags/pt.svg' },
  ];

  colorMode: string = 'light';

  activeLink: string = '';
  links: Links[] = links;

  constructor(
    private SidenavService: SidenavService,
    private router: Router,
    public UI: UiService
  ) {}

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

  redirectTo(route: string): void {
    this.activeLink = route;
    this.router.navigate([route]);
  }
}
