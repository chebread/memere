import { create } from '../routes/create.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { help } from '../routes/help.js';

export const routes = {
  '/': {
    route: create,
    title: 'memere',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/help': {
    route: help,
    title: 'Help',
  },
};
