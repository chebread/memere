import { routes } from './routes.js';

export const render = path => {
  if (!routes[path].title) {
    document.title = 'memere';
  } else {
    document.title = routes[path].title + (path === '/' ? '' : ' - memere');
    // home route가 아니면 모두 - memere 를 title에 붙입니다.
  }
  routes[path].route();
};
