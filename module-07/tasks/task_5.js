'use strict';

const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', inputChangeText);

function inputChangeText(e) {
  outputText.textContent = e.target.value;

  if (outputText.textContent === '') {
    outputText.textContent = 'незнакомец';
  }
} 

