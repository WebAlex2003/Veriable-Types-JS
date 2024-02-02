// Task 2
// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон чисел в переменных от min до max
// Например если min=0 и max=5, диапазон 0-5, и в нем два четных числа - 2 и 4, их сумма 6

const min = 0;
const max = 50;
let total = 0;

for (let i = 10; max >= i; i += 1) {
  if (i % 2 === 0) {
    console.log("четное число: ", i);
  }
  total += i;
}

console.log(total);

// Task 3

const room = 4;
let price;

switch (room) {
  case 1:
    price = 500000;
    break;

  case 2:
    price = 1000000;
    break;

  case 3:
    price = 2000000;
    break;

  case 4:
    price = 3000000;
    break;

  default: {
    console.log("unfortunatly we dont have this option");
  }
}

console.log(price);

// Task 4

// let balance = 10000;
// const payment = 100;

// if ((balance) => payment) {
//   console.log("OK");

//   balance -= payment;

//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("Не достаточно средств");
// }

// console.log("Операция завершена");

// Task 4

let totalSpent = 5000;
let payment = 1000;
let discount = 0;

if (totalSpent < 100) {
  console.log("Товар куплен на эту сумму не облагается скидкой");
} else if (totalSpent >= 1000 && totalSpent <= 3000) {
  console.log("Вы получите скидку 5%");
  discount = 0.05;
} else if (totalSpent > 3000 && totalSpent <= 5000) {
  console.log("Вы получите скидку 10%");
  discount = 0.1;
} else if (totalSpent > 5000) {
  console.log("Вы получите скидку 15%");
  discount = 0.15;
}

payment = payment - payment * discount;

console.log(`получите сумму ${payment} при скидке ${discount * 100}%`);

totalSpent += payment;

console.log(
  `Сумма которую вы потратли за 5 лет в этом магазине составляет ${totalSpent}`
);

// Task 5
/* С помощью цикла for и ветвлений вывели четные и нечетные числа в консоль */

for (let i = 20; 40 >= i; i += 1) {
  if (i % 2 !== 0) {
    console.log(`нечетное число: ${i}`);
  } 
  if (i % 2 === 0) {
    console.log(`четное число: ${i}`)
  }
}