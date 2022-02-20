import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UiService } from './services/ui.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mobileSize: boolean;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private UI: UiService
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.UI.mobileSize = false;
          console.log('mobilesize', this.UI.mobileSize);
        } else {
          this.UI.mobileSize = true;
          console.log('mobilesize', this.UI.mobileSize);
        }
      });
  }
}
