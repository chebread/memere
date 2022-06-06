import './imgSelection.css';
import { renderHTML } from '../components/renderHTML.js';
import { appendHTML } from '../components/appendHTML.js';
const log = console.log;
export const imgSelection = () => {
  const render = () => {
    const contentMsg = `
      <div class="container">
        <div class="container-wrapper">

          <div class="content">
            <div class="content-wrapper">
              <button
                id="input-btn"
                style="background-color: rgb(8, 166, 254); color: white;">
                Enter image
              </button>
              <button
                id="upload-btn"
                style="background-color: rgb(221, 221, 238); color: rgb(54, 121, 246);">
                Upload image
              </button>
            </div>

            <div id="event-box" class="content-wrapper">
              
            </div>
          </div>

        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    document.querySelectorAll('button').forEach(item => {
      renderHTML(
        `<input placeholder="Enter the URL of the meme" type="text" />`,
        document.querySelector('#event-box')
      );
      item.addEventListener('click', e => {
        const id = e.target.id;
        console.log(id);
        if (id === 'input-btn') {
          document.querySelector(`#input-btn`).style =
            'background-color: rgb(8, 166, 254); color: white;';
          document.querySelector(`#upload-btn`).style =
            'background-color: rgb(221, 221, 238); color: rgb(54, 121, 246);';
          renderHTML(
            `<input placeholder="Enter the URL of the meme" type="text" />`,
            document.querySelector('#event-box')
          );
        } else {
          document.querySelector(`#input-btn`).style =
            'background-color: rgb(221, 221, 238); color: rgb(54, 121, 246);';
          document.querySelector(`#upload-btn`).style =
            'background-color: rgb(8, 166, 254); color: white;';
          renderHTML(`null`, document.querySelector('#event-box'));
        }
      });
    });
  };
  render();
};
