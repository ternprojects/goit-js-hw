'use strict';

const items = document.querySelectorAll('#categories .item');
  console.log(`В списке ${items.length} категории`);

const content = document.querySelectorAll('h2');
const values = document.querySelectorAll('h2 + ul');

  content.forEach((el, i) =>
    console.log(`Категория: ${el.textContent} \nКоличество элементов: ${values[i].childElementCount}`),
  );
