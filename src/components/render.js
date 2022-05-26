import { routes } from './routes.js';

export const render = path => {
  if (!routes[path].title) {
    document.title = 'This is Haneum';
  } else {
    document.title = routes[path].title;
  }
  routes[path].route();
};
