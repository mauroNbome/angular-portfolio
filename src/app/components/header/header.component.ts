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

  links: Links[] = links;

  constructor(
    private SidenavService: SidenavService,
    private router: Router,
    public UI: UiService
  ) {}

  ngOnInit(): void {
    this.setLangFromLS();
    this.UI.setColorModeFromLS();

    console.log(this.lang);
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

  redirectTo(route: string): void {
    this.UI.activeLink = route;
    this.router.navigate([route]);
  }

  toggleColorMode() {
    this.UI.toggleColorMode();
  }
}
