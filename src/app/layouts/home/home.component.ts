import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  findWithMe = [
    {
      alt: 'linkedin-logo',
      goto: 'http://google.com',
      logo: '../../../assets/icons/logo-linkedin.svg',
    },
    {
      alt: 'facebook-logo',
      goto: 'http://google.com',
      logo: '../../../assets/icons/logo-facebook.svg',
    },
    {
      alt: 'linkedin-logo',
      goto: 'http://google.com',
      logo: '../../../assets/icons/logo-instagram.svg',
    },
  ];

  bestSkills = [
    {
      alt: 'angular-logo',
      goto: 'https://angular.io/',
      logo: '../../../assets/icons/logo-angular.svg',
    },
    {
      alt: 'ionic-logo',
      goto: 'https://ionicframework.com/',
      logo: '../../../assets/icons/logo-ionic.svg',
    },
    {
      alt: 'nodejs-logo',
      goto: 'https://nodejs.org/',
      logo: '../../../assets/icons/logo-nodejs.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
