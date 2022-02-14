import { Component, OnInit } from '@angular/core';
import { SidenavService } from '.././sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lang: string;
  constructor(private SidenavService: SidenavService) {}

  ngOnInit(): void {
    this.setLangFromLS();
  }

  toggleSidenav(): void {
    this.SidenavService.isOpened = !this.SidenavService.isOpened;
  }

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
}
