'use strict';

const inputText = document.querySelector('#validation-input');
const lengthValue = inputText.dataset.length;

inputText.addEventListener('blur', blurOn);

function blurOn() {

  if (inputText.value.length >= lengthValue) {
    inputText.classList.remove('invalid');
    return inputText.classList.add('valid');
  }

  if (inputText.value.length < lengthValue) {
    inputText.classList.remove('valid');
    return inputText.classList.add('invalid');
  }
}