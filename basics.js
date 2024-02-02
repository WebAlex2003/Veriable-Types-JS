// const word = "celebreties";
// const length = word.length;

// console.log(length);

// Массивы
// const friends = ["Dail", "Kaven", "Mike", "Greg"];
// console.table(friends);

// Изменение значения массива
// friends[1] = "Tory Lanez";
// console.table(friends);

/* Передача по значению и по ссылке */
// Передача по значению
/* Создается копия переменной в памяти и не имеет ничего общего с ней */
// let a = 10;
// let b = a;

// console.log(a);

// console.log(b);

// a = 20;

// console.log(a);

// console.log(b);

/* передача по ссылке
Создается отдельное место в памяти для сложных типов и создается ссылка на этот тип  */
// const s = [1, 2, 3, 4];
// const d = s;

// console.log(s);

// console.log(d);

// s[0] = 500;
// s[1] = 200;

// console.log(s);
// console.log(d);

// Task 1

const friends = ["Mike", "Caven", "Jorsh", "Stiven"];
const friendsLength = friends.length - 1;
console.table(friends);

for (let i = 0; i <= friendsLength; i += 1) {
  friends[i] += "-1";
}

console.table(friends);

// Task 1
/* Посчитать общую сумму покупок в корзине  */

const cart = [100, 200, 300, 400, 500, 600, 700, 500, 100, 200];
let total = 0;

for (let i = 0; cart.length > i; i += 1) {
  console.log(cart[i]);

  total += cart[i];
}

console.log("Total:", total);

// Task 2
/* Посчитать общую сумму четных чисел и выведи ее в консоль */

const number = [33, 44, 56, 34, 66, 22, 35, 59, 100, 1];
let general = 0;

for (let i = 0; number.length > i; i += 1) {
  console.log(number[i]);
  if (number[i] % 2 === 0) {
    console.log(`Четное число: ${number[i]}`);
  }

  general += number[i];
}

console.log(general);

/* Логика от обратного */

const digit = [33, 44, 56, 34, 66, 22, 35, 59, 100, 1];
let basic = 0;

for (let i = 0; digit.length > i; i += 1) {
  if (digit[i] % 2 !== 0) {
    console.log(`нечетное число ${digit[i]}`);
  }

  if (digit[i] % 2 === 0) {
    console.log(`четные числа: ${digit[i]}`);
  }
}
