import { renderHTML } from '../components/renderHTML.js';
export const home = () => {
  const render = () => {
    const contentMsg = `
      welcome to memere
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
