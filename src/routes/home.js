import './home.css';
import { renderHTML } from '../components/renderHTML.js';
import { router } from '../components/router.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    // document.querySelector('#help-button').addEventListener('click', e => {
    //   router('/help');
    // });
  };
  render();
};

{
  /* <div class="container-content">
            <div class="content-wrapper">
              <div class="content-buttons">
                <button>
                  <i class="fa-solid fa-plus"></i>
                </button>
                <button>
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <button>
                <i class="fa-solid fa-minus"></i>
              </button>
                <button id="help-button">
                  <i class="fa-solid fa-question"></i>
                </button>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="content-painter">
                <canvas id="canvas"></canvas>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="content-buttons">
                <button>
                  <i class="fa-solid fa-file"></i>
                </button>
              </div>
            </div>
          </div>
        </div> */
}
