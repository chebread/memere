import './reset.css';
import './app.css';
import { router } from './components/router.js';

const app = () => {
  // render specific route
  const render = () => {
    router(window.location.pathname);
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('a').forEach(item =>
        item.addEventListener('click', e => {
          const url = e.target.attributes.href.nodeValue;
          if (url.search(/https?:\/\//) === -1) {
            e.preventDefault();
            router(url);
          }
        })
      );
    });
  };
  render();
};
app();
