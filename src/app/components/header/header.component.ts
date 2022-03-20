import { Component, OnInit } from '@angular/core';
import { SidenavService } from '.././sidenav/sidenav.service';
import { Links } from '../../models/header.models';
import { Router } from '@angular/router';
import { links, languages } from './header.data';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links: Links[] = links;
  languages = languages;

  constructor(
    private sidenav: SidenavService,
    private router: Router,
    public UI: UiService
  ) {}

  ngOnInit(): void {
    this.UI.setLangFromLS();
    this.UI.setColorModeFromLS();
    this.UI.setActiveLinkFromURL();
  }

  changeLang(event: string): void {
    this.UI.changeLang(event);
  }

  toggleSidenav(): void {
    this.sidenav.isOpened = !this.sidenav.isOpened;
  }

  redirectTo(route: string): void {
    this.UI.activeLink = route;
    this.router.navigate([route]);
  }

  toggleColorMode(): void {
    this.UI.toggleColorMode();
  }
}
