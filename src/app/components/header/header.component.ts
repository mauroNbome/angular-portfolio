import { Component, OnInit } from '@angular/core';
import { SidenavService } from '.././sidenav/sidenav.service';
import { Links } from '../../models/header.models';
import { Router } from '@angular/router';
import { links, languages } from './header.data';
import { UiService } from '../../services/ui/ui.service';
import { LanguageService } from 'src/app/services/language/language.service';

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
    public UI: UiService,
    public language: LanguageService
  ) {}

  ngOnInit(): void {}

  changeLang(event: string): void {
    this.language.changeLang(event);
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
