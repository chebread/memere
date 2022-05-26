import { notFoundPage } from '../routes/notFoundPage.js';
import { renderHTML } from './renderHTML.js';

export const routes = {
  '/': {
    route: () => renderHTML('home', document.querySelector('#root')),
    title: 'Haneum Blog',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
};
