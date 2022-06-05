import './create.css';
import { renderHTML } from '../components/renderHTML.js';
import { router } from '../components/router.js';

// teenyicons default size is 25px size
// RGB(225, 255, 0) is main color

export const create = () => {
  const render = () => {
    const contentMsg = `
      
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    // document.querySelector('#input').addEventListener('keyup', e => {
    //   console.log(e.target.value);
    // });
  };
  render();
};
