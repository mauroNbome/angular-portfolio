import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';

import { SidenavService } from './components/sidenav/sidenav.service';
import { LayoutsModule } from './layouts/layouts.module';
import { LayoutModule } from '@angular/cdk/layout';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    LayoutsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
