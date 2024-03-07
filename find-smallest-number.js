// Find smallest number in array

// const findSmallNumber = function (numbers) {
//   console.log(numbers);

//   let smallNumber = numbers[0];

//   for (const number of numbers) {
//     if (smallNumber > number) {
//       smallNumber = number;
//     }
//   }
//   return smallNumber;
// };

// console.log(findSmallNumber([10, 51, 11, 15]));
// console.log(findSmallNumber([10, 55, 101, 151]));
// console.log(findSmallNumber([2, 11, 10, 15]));

// // Practise

// const fn = function () {
//   console.log(arguments);

//   for (const argument of arguments) {
//     console.log(argument);
//   }
// };

// fn("Hello", "Where are you", "When");
// fn("Hello", "Where are you");
// fn("Hello", "Where are you", "How");

// Псевдомассив arguments

// Practise метод Array.from, который создает новый экземпляр массива

const function1 = function () {
  console.log(arguments);

  const arrg = Array.from(arguments);

  console.log(arrg);
};

function1(1, 2, 3, 4, 5, 6);
function1(1, 2, 3, 4, 5);
function1(1, 2, 3, 4);

// practise with meth method ... rest

// const numberFunction = function (...arrg) {
//   console.log(arguments);
//   console.log(arrg);
// };

// numberFunction(1, 2, 3, 4);
// numberFunction(4, 3, 2, 1);
// numberFunction(4, 3, 2, 1);
// numberFunction(4, 3, 2, 1);
// numberFunction(4, 3, 2, 1);

// Напиши функцию add для сложения произвольного количества аргументов (чисел)
/* - Операция ...rest */

// const addFunction = function (...arrgs) {
//   console.log(arrgs);

//   let total = 0;

//   for (const arrg of arrgs) {
//     total += arrg;
//   }

//   console.log(total);
// };

// addFunction(10, 20, 30);
// addFunction(10, 40, 30);

/* Напиши функцию filterNumbers (array [number 1, ...]) которая:
- первым аргументом принимает массив чисел
- после первого аргумента может быть произвольное количество других аргументов которые будут числами.
- Функция должна вернуть новый массив, в котором будут только те аргументы начиная со второго
для которого есть аналог в оригинальном массиве. */

// const filterNumbers = function (array1, ...numbers) {
//   console.log("arguments:", numbers);
//   console.log("array:", array1);
//   const uniqueElement = [];

//   for (const array of array1) {
//     if (numbers.includes(array)) {
//       uniqueElement.push(array);
//       console.log(`${array} есть везде`);
//     }
//   }
//   console.log(uniqueElement);
// };

// filterNumbers([11, 2, 31, 4, 51], 1, 2, 3, 4, 5);
// filterNumbers([11, 2, 31, 4, 51], 1, 2, 3, 4, 5);
// filterNumbers([11, 2, 31, 4, 51], 1, 2, 3, 4, 5);
