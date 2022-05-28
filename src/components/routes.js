import { home } from '../routes/home.js';
import { notFoundPage } from '../routes/notFoundPage.js';

export const routes = {
  '/': {
    route: home,
    title: 'memere',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
};
