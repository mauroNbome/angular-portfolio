import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Links } from '../../models/header.models';
import { links, languages } from '../header/header.data';
import { UiService } from '../../services/ui/ui.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  links: Links[] = links;
  languages = languages;

  constructor(
    public SidenavService: SidenavService,
    public UI: UiService,
    private router: Router,
    private language: LanguageService
  ) {}

  ngOnInit(): void {}

  redirectTo(route: string): void {
    this.UI.activeLink = route;
    this.router.navigate([route]);

    setTimeout(() => {
      this.SidenavService.isOpened = false;
    }, 100);
  }

  toggleColorMode(): void {
    this.UI.toggleColorMode();
  }

  changeLang(event: string): void {
    this.language.changeLang(event);
  }
}
