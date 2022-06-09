import './imgSelection.css';
import { renderHTML } from '../components/renderHTML.js';
import { create } from './create.js';
import { router } from '../components/router.js';
export const imgSelection = () => {
  const render = () => {
    const contentMsg = `
      <div class="container">
        <div class="container-wrapper">
          <div class="container-spacer"></div>
          <input id="url-input" type="text" placeholder="Enter the meme URL" autocomplete="off" />
        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    document.querySelector('#url-input').addEventListener('keydown', e => {
      if (e.keyCode === 13) create(e.target.value);
    });
  };
  render();
};
