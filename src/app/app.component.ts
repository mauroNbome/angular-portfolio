import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UiService } from './services/ui.service';
import { SidenavService } from './components/sidenav/sidenav.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mobileSize: boolean;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private UI: UiService,
    private SidenavService: SidenavService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.UI.mobileSize = false;
          console.log('mobilesize', this.UI.mobileSize);
          this.hideSidenav();
        } else {
          this.UI.mobileSize = true;
          console.log('mobilesize', this.UI.mobileSize);
        }
      });
  }

  hideSidenav() {
    this.SidenavService.isOpened = false;
  }
}
