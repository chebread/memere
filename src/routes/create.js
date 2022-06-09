import './create.css';
import { renderHTML } from '../components/renderHTML.js';

export const create = (
  url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/510px-Flag_of_South_Korea.svg.png'
) => {
  const render = () => {
    const contentMsg = `
      <div class="container">
        <div class="container-wrapper">
          <canvas id="img"></canvas>
        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    const canvas = document.querySelector('#img');
    const img = new Image();
    img.src = url;
    canvas.width = 400;
    canvas.height = img.height;
    console.log(1);
    canvas.getContext('2d').drawImage(img, 0, 0, 400, img.height);

    // document.querySelector('#input').addEventListener('keyup', e => {
    //   console.log(e.target.value);
    // });
  };
  render();
};
