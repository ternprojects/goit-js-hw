'use strict';

const inputText = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputText.addEventListener('input', changeFontSize);

function changeFontSize() {
  spanText.style.fontSize = `${inputText.value}px`;
}