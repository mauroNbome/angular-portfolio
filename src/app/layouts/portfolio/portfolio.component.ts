import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  mockProjects = [
    {
      id: 0,
      picture: '',
      type: 'Mobile App',
      likes: 115,
      alreadyLiked: false,
      title: 'Mobile App landing design & Services',
    },

    {
      id: 1,
      picture: '',
      type: 'Mobile App',
      likes: 115,
      alreadyLiked: false,
      title: 'Mobile App landing design & Services',
    },

    {
      id: 2,
      picture: '',
      type: 'Mobile App',
      likes: 115,
      alreadyLiked: false,
      title: 'Mobile App landing design & Services',
    },

    {
      id: 3,
      picture: '',
      type: 'Mobile App',
      likes: 115,
      alreadyLiked: true,
      title: 'Mobile App landing design & Services',
    },

    {
      id: 4,
      picture: '',
      type: 'Mobile App',
      likes: 115,
      alreadyLiked: false,
      title: 'Mobile App landing design & Services',
    },
    {
      id: 5,
      picture: '',
      type: 'Mobile App',
      likes: 115,
      alreadyLiked: false,
      title: 'Mobile App landing design & Services',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToFav(item) {
    console.log(item);

    console.log('in');
    this.mockProjects.forEach((el) => {
      if (item.id === el.id) {
        if (!item.alreadyLiked) {
          el.likes++;
          el.alreadyLiked = true;
        } else {
          el.likes--;
          el.alreadyLiked = false;
        }
      }
    });
  }

  alreadyLiked(status: boolean) {
    return status ? 'favorite' : 'favorite_border';
  }
}
