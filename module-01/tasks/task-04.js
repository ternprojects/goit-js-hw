'use script';

alert('Добро пожаловать в Межгалактическую лавку! У нас Вы можете приобрести ремонтных дроидов по самым выгодным ценам! На данный момент стоимость одного дроида составляет 3000 кредов. Нажмите на кнопку "Окей" и сделайте Ваш заказ!');


const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantityDroids;
let balance;

quantityDroids = prompt('Сколько дроидов Вы хотите заказать? Если Вы передумали - нажмите на кнопку "Cancel"');

totalPrice = quantityDroids * pricePerDroid;
balance = credits - totalPrice;

if (quantityDroids === null) {
  console.log('Отменено пользователем!');
  alert('Отменено пользователем!');
} else if (credits < totalPrice) {
  console.log('Недостаточно средств на счету!');
  alert('Недостаточно средств на счету!');
} else if (quantityDroids < 1) {
  console.log('Извините, но Вы не выбрали нужное количество товара! Попробуйте заново!');
  alert('Извините, но Вы не выбрали нужное количество товара! Попробуйте заново!');
} else if ((Number.isNaN(quantityDroids)) === false) {
  console.log('Для заказа введите пожалуйста целое число!');
  alert('Для заказа введите пожалуйста целое число!');
} else {
  console.log(`Поздравляем с покупкой! Вы приобрели дроидов в количестве ${quantityDroids} шт. на сумму ${totalPrice}, на Вашем счету осталось ${balance} кредитов. Менеджер вскоре с Вами свяжется! Спасибо за заказ!`);
  alert(`Поздравляем с покупкой! Вы приеобрели дроидов в количестве ${quantityDroids} шт., на Вашем счету осталось ${balance} кредитов.  Менеджер вскоре с Вами свяжется! Спасибо за заказ!`);
}