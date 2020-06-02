'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arr = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = `${item}`;
  return li;
});

console.log(arr);

const ul = document.querySelector('#ingredients');
ul.append(...arr);