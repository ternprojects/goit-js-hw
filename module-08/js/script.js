import dataImg from './gallery-items.js';
import { tempImg } from './template.js';

const list = document.querySelector('.js-gallery');
const allImg = dataImg.map(item => tempImg(item)).join('');

list.insertAdjacentHTML('beforeend', allImg);
list.addEventListener('click', clickList)

function clickList(e) {
  if (e.target.nodeName !== "IMG") return;
  const { source } = e.target.dataset;
  e.target.src = source;
}