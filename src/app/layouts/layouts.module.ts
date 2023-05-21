import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
    CreateBlogComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule, // Aquí está la importación
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
  ],
})
export class LayoutsModule {}
