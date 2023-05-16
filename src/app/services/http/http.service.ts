import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeData } from '../../models/home.models';
import { Project } from '../../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  sendMessage(): any {
    const mockAPIResponse = {
      status: 'ok',
      message: 'Your message was succesfully sent, thanks.',
    };

    return of(mockAPIResponse);
  }

  getBlogs(): any {
    const mockBlogs = [
      {
        id: 0,
        title: 'Mobile App landing design & Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
        date: 'Mon May 16 2022 21:56:43 GMT-0300 (hora estándar de Argentina)',
        img: '../../assets/team-celebrating.jpeg',
      },
      {
        id: 1,
        title: 'Mobile App landing design & Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
        date: 'Mon May 15 2022 21:56:43 GMT-0300 (hora estándar de Argentina)',
        img: '../../assets/team-celebrating.jpeg',
      },
      {
        id: 2,
        title: 'Mobile App landing design & Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
        date: 'Mon May 16 2012 21:56:43 GMT-0300 (hora estándar de Argentina)',
        img: '../../assets/team-celebrating.jpeg',
      },
      {
        id: 3,
        title: 'Leveragin services around the globe',
        desc: '35355351111111111111111111111111111111eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
        date: 'Mon May 11 2022 21:56:43 GMT-0300 (hora estándar de Argentina)',
        img: '../../assets/team-celebrating-2.jpg',
      },
      {
        id: 4,
        title: 'Services described in hebrew',
        desc: 'eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
        date: 'Mon May 10 2022 21:56:43 GMT-0300 (hora estándar de Argentina)',
        img: '../../assets/team-celebrating-3.jpg',
      },
      {
        id: 5,
        title: 'landing design & Services',
        desc: 'ffffffffffffffffffffffffffffffffffs ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
        date: 'Mon May 31 2022 21:56:43 GMT-0300 (hora estándar de Argentina)',
        img: '../../assets/team-celebrating.jpeg',
      },
    ];

    return of(mockBlogs);
  }

  getHomeData(): Observable<HomeData> {
    const homeDataMock = {
      findWithme: [
        {
          alt: 'linkedin-logo',
          goto: 'http://google.com',
          logo: '../../../assets/icons/logo-linkedin.svg',
          logo_dark: '../../../assets/icons/logo-linkedin-dark.svg',
        },
        {
          alt: 'facebook-logo',
          goto: 'http://google.com',
          logo: '../../../assets/icons/logo-facebook.svg',
          logo_dark: '../../../assets/icons/logo-facebook-dark.svg',
        },
        {
          alt: 'linkedin-logo',
          goto: 'http://google.com',
          logo: '../../../assets/icons/logo-instagram.svg',
          logo_dark: '../../../assets/icons/logo-instagram-dark.svg',
        },
      ],
      bestSkills: [
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
      ],
    };

    return of(homeDataMock);
  }

  getMockProjects(): Observable<Project[]> {
    const mockProjects: Project[] = [
      {
        id: 0,
        image: '',
        type: 'Mobile App',
        likes: 115,
        alreadyLiked: false,
        title: 'Mobile App landing design & Services',
      },

      {
        id: 1,
        image: '',
        type: 'Mobile App',
        likes: 115,
        alreadyLiked: false,
        title: 'Mobile App landing design & Services',
      },

      {
        id: 2,
        image: '',
        type: 'Mobile App',
        likes: 115,
        alreadyLiked: false,
        title: 'Mobile App landing design & Services',
      },

      {
        id: 3,
        image: '',
        type: 'Mobile App',
        likes: 115,
        alreadyLiked: true,
        title: 'Mobile App landing design & Services',
      },

      {
        id: 4,
        image: '',
        type: 'Mobile App',
        likes: 115,
        alreadyLiked: false,
        title: 'Mobile App landing design & Services',
      },
      {
        id: 5,
        image: '',
        type: 'Mobile App',
        likes: 115,
        alreadyLiked: false,
        title: 'Mobile App landing design & Services',
      },
    ];

    return of(mockProjects);
  }
}
