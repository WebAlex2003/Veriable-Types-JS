// Функциональные выражения

// const number = 22;
// const string = function () {
//   console.log(`this number will be ${number}`);
// };

// string();

// Task 1
/* Передай значения в параметры с помощью аргументов a и b */
/* В этом примере мы передали аргумент только первым двум параметрам */
// const add = function (a, b) {
//   console.log("function is running");
//   console.log(a);
//   console.log(b);
//   let resoult = a + b;
//   //   console.log('a + b =', resoult)
//   return resoult;
// };

// const occasion1 = add(20, 30);
// console.log("20 + 30 =", occasion1);

// const occasion2 = add(15, 20);
// console.log("15 + 20 =", occasion2);
// add(30, 50);

// Task 2
/* Передай значение аргумента всем параметрам в функции */

// const mathOperation = function (a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);

//   let total = a + b - c;
//   console.log("resoult =", total);
// };

// mathOperation(20, 30, 5);
// mathOperation(10, 10, 5);
// mathOperation(15, 15, 5);

// Practise
// const version = function () {
//   console.log(1);

//   console.log(2);

//   console.log(3);
// };

// version();

// Стек вызовов

// const function1 = function () {
//   console.log("1 Function");
// };

// const function2 = function () {
//   console.log("2 Function");
// };

// const function3 = function () {
//   console.log("3 Function");
// };

// console.log('Выполянется до вызова функции')
// function1();
// console.log('Выполянется после вызова функции')
// console.log('Выполянется до вызова функции')
// function2();
// console.log('Выполянется после вызова функции')
// console.log('Выполянется до вызова функции')
// function3();
// console.log('Выполянется после вызова функции')

// Практика стека вызовов

const functionA = function () {
  console.log("Выполняется функция A");

  functionB();
};
const functionB = function () {
  console.log("Выполняется функция B");

  functionC();
};
const functionC = function () {
  console.log("Выполняется функция C");
};

functionA();

// function practise

const fn = function (a, b, c) {
  console.log("Math operation");

  let resoult = a + b + c ** 2 - 900;
  console.log(resoult);
};

fn(20, 30, 30);
