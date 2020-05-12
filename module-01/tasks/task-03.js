'use script';

let message;

const INPUT_PASSWORD = prompt('Please enter password');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (INPUT_PASSWORD === null) {
  alert('Отменено пользаователем!');
  message = 'Отменено пользаователем!'
  console.log(message);

} else if (INPUT_PASSWORD === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
  message = 'Добро пожаловать!';
  console.log(message);

} else {
  alert('Доступ запрещен, неверный пароль!');
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}
