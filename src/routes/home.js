import './home.css';
import { renderHTML } from '../components/renderHTML.js';
import { router } from '../components/router.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <div class="container">
        <div class="container-wrapper"
          <div class="container-items">
            <div class="items-button">
              <button id="img">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="items-button">
              <button id="text">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="items-button">
              <button id="remove">
                <i class="fa-solid fa-minus"></i>
              </button>
            </div>
            <div class="items-button">
              <button id="help">
                <i class="fa-solid fa-info"></i>
              </button>
            </div>
            </div>
          </div>
          <div class="container-items">
            <div class="items-
          </div>
        </div>
      </div>  
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    // document.querySelector('#help-button').addEventListener('click', e => {
    //   router('/help');
    // });
  };
  render();
};
