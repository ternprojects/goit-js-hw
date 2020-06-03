'use strict';

const counterValue = document.querySelector('#value');

const counterIncrement = document.querySelector('button[data-action="increment"]');
const counterDecrement = document.querySelector('button[data-action="decrement"]');

counterIncrement.addEventListener('click', increment);
counterDecrement.addEventListener('click', decrement);

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function decrement() {
  counterValue.textContent -= 1;
}


