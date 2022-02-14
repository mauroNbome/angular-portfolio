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
    console.log(this.lang);
  }

  toggleSidenav() {
    this.SidenavService.isOpened = !this.SidenavService.isOpened;
  }

  changeLang(event) {
    this.lang = event;
    this.saveLangToLS();
  }

  setLangFromLS() {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  saveLangToLS() {
    localStorage.setItem('lang', this.lang);
  }
}
