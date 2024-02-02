// Task 1
/* Посчитать общую сумму покупок в корзине  */

// const cart = [100, 200, 300, 400, 500, 600, 700, 500, 100, 200];
// let total = 0;

// for (let i = 0; cart.length > i; i += 1) {
//   console.log(cart[i]);

//   total += cart[i];
// }

// console.log("Total:", total);

// Через for of

// const numbers = [10, 20, 30, 40, 50, 60];
// let general = 0;

// for (const number of numbers) {
//   console.log(number);

//   general += number;
// }

// console.log(general);

// task 2
/* Напиши скрипт который выведит правильный пароль с помощью тернарного оператора */

// const password = ["123", "321", "111"];
// const correctPassword = "321";

// const resoult = password.includes(correctPassword)
//   ? `пароль ${correctPassword} найден`
//   : `пароль ${correctPassword} не найден`;

// console.log(resoult);

// // Task 3
// const string = "JavaScript";
// const letters = string.split("");

// console.log(letters);

/* Метод concat обьединяет два или более массивов */
// Task 4
/* Напиши скрипт который считает сумму элементов двух массивов */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let generalAmount = 0;

// const numbers = array1.concat(array2);

// for (let i = 0; numbers[i] > i; i += 1) {
//   generalAmount += numbers[i];
// }

// console.log(generalAmount);

// Practise
// const massive1 = [10, 20, 30, 40, 50];
// const massive2 = [1, 2, 3, 4, 5];
// const massive3 = [2, 3, 5, 6, 7];
// let totalAmount = 0;

// const numbersAmount = massive1.concat(massive2, massive3);

// for (let i = 0; numbersAmount[i]; i += 1) {
//   console.log(numbersAmount[i]);
//   totalAmount += numbersAmount[i];
// }

// console.log(totalAmount);

/* Метод splice используется для изменения содержимого массива */
// Удаление массива по индексу
// Task 5

// const cards = ["Карточка1", "Карточка2", "Карточка3", "Карточка4", "Карточка5"];
// const cardToRemove = "Карточка1";

// const index = cards.indexOf(cardToRemove);

// console.log(index);

//Task 6 Исправь последовательность чисел

// const numbers = [1, 2, 3, 5, 4];
// const mistakeNumber = 5;

// const index = numbers.indexOf(mistakeNumber);
// numbers.splice(index, 1)

// console.log(index);

// console.table(numbers);

// Task 6 добавь элементы в массив
const names = ["Mike", "Richard", "Alex", "Ann"];
const desiredName = "Richard";

const index = names.indexOf(desiredName);

console.log(index);

names.splice(index, 0, "Brayan", "Mark");

console.table(names);

// Task 7 Замени элемент массива один на другой

const numbers = [1, 2, 3, 4, 5];
const desiredNumber = 3;

const index1 = numbers.indexOf(desiredNumber);

console.log(index1);

numbers.splice(index1, 3, 5, 6, 7);

console.table(numbers);
