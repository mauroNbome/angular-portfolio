import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { AboutComponent } from './layouts/about/about.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { ContactMeComponent } from './layouts/contact-me/contact-me.component';
import { CreateBlogComponent } from './layouts/admin/create-blog/create-blog.component';
import { LoginComponent } from './layouts/admin/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactme', component: ContactMeComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/createblog', component: CreateBlogComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
