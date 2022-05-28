import './reset.css';
import './app.css';
import { router } from './components/router.js';

const app = () => {
  const render = () => {
    router(window.location.pathname);
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('a').forEach(item =>
        item.addEventListener('click', e => {
          const url = e.target.attributes.href.nodeValue;
          if (url.search(/https?:\/\//) === -1) {
            // https나 http가 있다면 원래의 링크로 이동한다
            // 없다면 router로 특정 경로로 이동한다
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
