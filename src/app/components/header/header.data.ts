import { Links } from '../../models/header.models';
export const links: Links[] = [
  {
    label: 'header_home',
    path: '',
    icon: 'home',
  },
  {
    label: 'header_about',
    path: 'about',
    icon: 'favorite_border',
  },
  {
    label: 'header_portfolio',
    path: 'portfolio',
    icon: 'app_shortcut',
  },
  {
    label: 'header_blog',
    path: 'blog',
    icon: 'rss_feed',
  },
  {
    label: 'header_contact',
    path: 'contactme',
    icon: 'contact_page',
  },
];

export const languages = [
  { label: 'Español', value: 'es', img: '../../../assets/flags/es.svg' },
  { label: 'English', value: 'en', img: '../../../assets/flags/gb.svg' },
  { label: 'Portuguese', value: 'pt', img: '../../../assets/flags/pt.svg' },
];
