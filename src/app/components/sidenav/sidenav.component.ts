import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Links } from '../../models/header.models';
import { links } from '../header/header.data';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  links: Links[] = links;
  constructor(
    public SidenavService: SidenavService,
    public UI: UiService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  redirectTo(route: string): void {
    this.UI.activeLink = route;
    this.router.navigate([route]);
  }

  toggleColorMode(): void {
    this.UI.toggleColorMode();
  }
}
