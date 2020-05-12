'use script';

let country = prompt('Выберите Вашу страну');

//basic checks
if (country === null) {
 /*  console.log('Отменено пользователем!');
  alert('Отменено пользователем!'); */
} else if (country.length < 1) {
  console.log('Пожалуйста, введите название страны!');
  alert('Пожалуйста, введите название страны!');  
} else if (!isNaN(country)) {
  console.log('Название страны не должно содердать цифр. Попробуйте ещё раз!');
  alert('Название страны не должно содердать цифр. Попробуйте ещё раз!');
} else {
  country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();
 /*  console.log(`Вы выбрали страну ${country}`);
  alert(`Вы выбрали страну ${country}`); */
}

//start script

switch (country) {
  case 'Китай':
    console.log(`Вы выбрали страну ${country} - 100 кредитов`);
    alert(`Вы выбрали страну ${country} - 100 кредитов`);
    break;
  case 'Чили':
    console.log(`Вы выбрали страну ${country} - 250 кредитов`);
    alert(`Вы выбрали страну ${country} - 250 кредитов`);
    break;
  case 'Австралия':
    console.log(`Вы выбрали страну ${country} - 170 кредитов`);
    alert(`Вы выбрали страну ${country} - 170 кредитов`);
    break;
  case 'Индия':
    console.log(`Вы выбрали страну ${country} - 80 кредитов`);
    alert(`Вы выбрали страну ${country} - 80 кредитов`);
    break;
  case 'Ямайка':
    console.log(`Вы выбрали страну ${country} - 120 кредитов`);
    alert(`Вы выбрали страну ${country} - 120 кредитов`);
    break;
  default:
    console.log('В вашей стране доставка не доступна или же Вы нажали отмена.');
    alert(`В вашей стране доставка не доступна или же Вы нажали отмена.`);
}
