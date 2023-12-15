// Task 5
// Напиши скрипт выбора опции доставки товара
// Опции хранятся в переменной option1 - самовывоз option2 - курьер, option3 - почта.
// В переменную message записать сообщение в зависимости от опции.
// - Вы сможете забрать товар завтра с 12:00 в нашем офисе
// - Курьер доставит заказ завтра с 9:00 до 18:00
// - Посылка будет отправлена сегодня
// - Вам перезвонит менеджер

const option = 2;
let message;

if (option === 1) {
  message = "самовывоз";
} else if (option === 2) {
  message = "Курьер";
} else if (option === 3) {
  message = "почта";
}

console.log(message);

// Решение с помощью Switch

switch (option) {
  case 1:
    message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;

  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;

  case 3:
    message = "Посылка будет отправлена сегодня";
    break;

  default: {
    console.log("Unfortunatly we dont have this option");
  }
}

console.log(message);
