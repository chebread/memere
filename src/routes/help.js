import { renderHTML } from '../components/renderHTML.js';

export const help = () => {
  const render = () => {
    const contentMsg = `
      help
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
