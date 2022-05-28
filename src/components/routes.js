import { notFoundPage } from '../routes/notFoundPage.js';
import { renderHTML } from './renderHTML.js';

export const routes = {
  '/': {
    route: () => renderHTML('memere~', document.querySelector('#root')),
    title: 'memere',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
};
