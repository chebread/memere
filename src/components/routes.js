import { notFoundPage } from '../routes/notFoundPage.js';
import { renderHTML } from './renderHTML.js';

export const routes = {
  '/': {
    route: () =>
      renderHTML(
        '<a href="/">memere</a> <a href="https://github.com">github</a>',
        document.querySelector('#root')
      ),
    title: 'memere',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
};
