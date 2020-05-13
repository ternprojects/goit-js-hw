//use strong style
'use script';

//declare variables
let country = prompt('Выберите Вашу страну');

//country names conversion
country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();

//start script
switch (country) {
  case 'Китай':
    console.log(`Вы выбрали страну ${country}. Стоимость доставки - 100 кредитов`);
    alert(`Вы выбрали страну ${country}. Стоимость доставвки - 100 кредитов`);
    break;
  case 'Чили':
    console.log(`Вы выбрали страну ${country}. Стоимость доставки - 250 кредитов`);
    alert(`Вы выбрали страну ${country}. Стоимость доставвки - 250 кредитов`);
    break;
  case 'Австралия':
    console.log(`Вы выбрали страну ${country}. Стоимость доставки - 170 кредитов`);
    alert(`Вы выбрали страну ${country}. Стоимость доставвки - 170 кредитов`);
    break;
  case 'Индия':
    console.log(`Вы выбрали страну ${country}. Стоимость доставки - 80 кредитов`);
    alert(`Вы выбрали страну ${country}. Стоимость доставвки - 80 кредитов`);
    break;
  case 'Ямайка':
    console.log(`Вы выбрали страну ${country}. Стоимость доставки - 120 кредитов`);
    alert(`Вы выбрали страну ${country}. Стоимость доставвки - 120 кредитов`);
    break;
  default:
    console.log('В вашей стране доставка не доступна.');
    alert(`В вашей стране доставка не доступна.`);
}
