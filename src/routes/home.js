import { renderHTML } from '../components/renderHTML.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
