import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  desc: string =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosa  corporis quos, quis voluptates soluta adipisci sed eligendi in officiis excepturi dolorum rem, dignissimos harum sunt. Provident ratione exercitationem illo rerum.';

  mockProjects = [
    {
      id: 0,
      title: 'Mobile App landing design & Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
      date: Date.now(),
    },

    {
      id: 1,
      title: 'Mobile App landing design & Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
      date: Date.now(),
    },

    {
      id: 2,
      title: 'Mobile App landing design & Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
      date: Date.now(),
    },

    {
      id: 3,
      title: 'Mobile App landing design & Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
      date: Date.now(),
    },

    {
      id: 4,
      title: 'Mobile App landing design & Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
      date: Date.now(),
    },
    {
      id: 5,
      title: 'Mobile App landing design & Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum quis error molestias libero culpa expedita illo. Autem molestiae perspiciatis ad, eligendi, et quibusdam incidunt praesentium quae, nulla dignissimos assumenda.',
      date: Date.now(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  formatDesc(text: string, count: number): string {
    return text.slice(0, count);
  }
}
