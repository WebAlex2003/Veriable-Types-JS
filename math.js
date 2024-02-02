// Функция Math.pow позволяет возводить число в степень.
const base = 100;
const power = 2;
const result = Math.pow(base, power);

console.log(result);

// task 1

let digits = prompt("number");
digits = Number(digits);

let degree = prompt("degree");
degree = Number(degree);

// 1 вариант - longer with veriable
const end = Math.pow(digits, degree);
// console.log(end);

// 2 вариант - short with out veriable
console.log(Math.pow(digits, degree));

// Функуия Math.random выбирает случайные числа от 0-1
console.log(Math.random());

// Math.random() * (max - min) + min; формула, которая выбирает случайные цифры в диапазоне x-y.
const min = 1;
const max = 100;
// Без округления
// const effect = Math.random() * (max - min) + min;
// C округлением с помомощью функции Math.round

const effect = Math.round(Math.random() * (max - min) + min);

console.log(effect);

// task 2 
const firstNumber = 20;
const secondNumber = 30;
let total = firstNumber / secondNumber;

console.log(total);

// Task 3
const item = 10;
const secondPower = 2;
let secTotal = item ** secondPower;

console.log(secTotal);

// Тернарный оператор 

const x = 20;
const y = 10;
let resoult = (x > y) ? 'Правда' : 'Ложь';

console.log(resoult);