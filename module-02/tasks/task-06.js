'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Для подсчёта суммы чисел - ввведите число');
 
  if (input === null) {
    alert('Вы нажали "Cancel" - ввод закончен!');
    break;
  } else if (input === '') {
    alert('Вы ничего не ввели! Пожалуйста, введите число!');
    continue;
  }

  input = Number(input);
  const sum = Number.isNaN(input);

  if (sum) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }
 
  numbers.push(input);

  } while (input !== null);

  for (const sum of numbers) {
    total += sum;
  }

if (total > 0) {
  alert(`Общая сумма введённых Вами чисел равна ${total}`);
} else if (total === 0) {
  alert(`Общая сумма чисел равна 0`);
} else if (total < 0) {
  alert(`Ошибка! Были введены отрицательные значения!`);
}