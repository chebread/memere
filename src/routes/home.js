import { renderHTML } from '../components/renderHTML.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <div>
        Memere
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
