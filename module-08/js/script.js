import dataImg from './gallery-items.js';
import { tempImg } from './template.js';

const list = document.querySelector('.js-gallery');
const allImg = dataImg.map(item => tempImg(item)).join('');

/* console.log(allImg); */

list.insertAdjacentHTML('beforeend', allImg);