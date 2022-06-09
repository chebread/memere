import { notFoundPage } from '../routes/notFoundPage.js';
import { help } from '../routes/help.js';
import { imgSelection } from '../routes/imgSelection.js';
import { create } from '../routes/create.js';

export const routes = {
  '/': {
    route: imgSelection,
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
