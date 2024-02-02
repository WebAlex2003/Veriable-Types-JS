// Оператор ветвления if
// Эта конструкция выполнится потому что в скобках if записанно значение которое в цифровом преобразовании = true
if (10) {
  console.log("abbreviation");
}
// Эта конструкция не выполнится потому что в скобках if записанно значение которое в цифровом преобразовании = false
if (NaN) {
  console.log(20);
}

if (undefined) {
  console.log("unfortunatlly");
}

if (true) {
  console.log(true);
}
// Оператор ветвления else используется в противном случае, если первый оператор не возвращает значение
if (null) {
  console.log(20);
} else {
  console.log("will be displayed");
}

if (5 > 10) {
  console.log("x > y");
} else {
  console.log("y > x");
}

if (10 > 11) {
  console.log("m > b");
} else {
  console.log("b > m");
}

// Тернарный оператор
const z = 20;
const y = 10;
let resoult = (z > y) ? 'Правда' : 'Ложь';

console.log(resoult);

// Task 1
// Вывести сообщения с помощью if

const salary = 3000;

if (salary < 500) {
  console.log("level 1");
} else if (salary > 500 && 1500 > salary) {
  console.log("level 2");
} else if (salary > 2000 && 3001 > salary) {
  console.log("level 3");
}
// Task 2
// Вывести число с помощью if
if (50 > 100) {
  console.log(20);
} else if (50 > 100 && 100 < 200) {
  console.log(30);
} else if (20 < 100 && 100 > 20) {
  console.log(40);
}

// Тернарный оператор
const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = "положительный баланс";
// } else {
//   message = "отрицательный баланс";
// }

// console.log(message);

// const message = balance >= 0 ? "положительный баланс" : "отрицательный баланс";
// console.log(message);

// Блочная область видимости пременных
const x = 35;

if (35 < 40) {
  console.log(x);
}

if (20 > 10) {
  const a = 10;
  console.log(a);
}

// Task 3
// Напиши скрипт выбора стоимости отеля по количеству звезд.
// 1 - 20$, 2-30$, 3-40$, 4-70$, 5-120$

const stars = 3;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 40;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log("We dont have this amount");
}

console.log(price);

// Task 4
// Напиши скрипт выбора стоимости отеля по кол-ву звезд с помощью логической Or
// 1-2 - 20$ , 3-4- 30$, 5-120$

const state = 7;
let value;

if (state === 1 || state === 2) {
  value = 20;
} else if (state === 3 || state === 4) {
  value = 30;
} else if (state === 5) {
  value = 120;
} else if (state === 6 || state === 7) {
  value = 200;
} else if (state === 10) {
  value = 1000;
}

console.log(value);

// If else можно заменить более удобной конструкцией switch
switch (state) {
  case 1:
    value = 20;
    break;

  case 2:
    value = 30;
    break;

  case 3:
    value = 40;
    break;

  case 7:
    value = 50;
    break;

  case 10:
    value = 100;
    break;

  default:
    console.log("нет такого значения");
}

console.log(value);

// Task 5
const totalSpent = 5050;
let payment = 1000;
let discount = 0;

if (totalSpent < 100) [console.log("Не партнер")];
else if (totalSpent >= 100 && totalSpent < 1000) {
  console.log("Бронзовый партнер, скидка 2%");
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent <= 5000) {
  console.log("Серебренный партнер, скидка 5%");
  discount = 0.05;
} else if (totalSpent > 5000) {
  console.log("Золотой партнер, скидка 10%");
  discount = 0.1;
}

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}`);