'use script';

let total;
let sum = 0;

do {
  total = prompt('Введите число:');
  const number = Number(total);
  const isNumber = Number.isNaN(number);

  if (!isNumber) {
    sum = sum + number;
  }

} while (total !== null);

console.log(`Общая сумма: ${sum}`);
alert(`Общая сумма: ${sum}`);