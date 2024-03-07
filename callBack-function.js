/* CallBack Functions или функция обратного вызова */

// const fnA = function (message, callback) {
//   console.log(message);
//   callback("this is argument for fnB");
// };

// const fnB = function (parametr) {
//   console.log("this is function B");
//   console.log(parametr);
// };

// fnA("this is function A", fnB);

/* function do math */

// const doMath = function (a, b, callback) {
//   const resoult = callback(a, b);

//   console.log(resoult)
// };

// const add = function (x, y) {
//   return x + y
// };

// doMath(5, 5, add);

/* Function do math */

// const mathOperation = function (a, b, callback) {
//   const resoult = callback(a, b)

//   console.log(resoult)
// }

// const plus = function (x, y) {
//   return x + y
// }

// mathOperation(10, 10, plus);

/* Выведи в консоль значения которые, больще и равняються 3*/

// const filter = function (arrays, mathOperation) {
//   const filterArray = [];

//   for (const array of arrays) {
//     console.log(array);
//     console.log(mathOperation(array));
//   }
//   return filterArray;
// };

// const callback = function (value) {
//   return value >= 3;
// };

// filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback);

/* callback functions */

// const functionA = function (a, b, c, callback) {
//   const mathOperation = callback(a, b, c)

//   console.log(mathOperation)
// };

// const functionB = function (x, y, p) {
//   return x + y * p
// };

// functionA(20, 30, 40, functionB);

/* Выведи в консоль значения меньше 40 */

// const functionA = function (numbers, callback) {
//   const filterArray = [];
//   for (const number of numbers) {
//     console.log(number);
//     console.log(callback(number));
//     const passed = callback(number);

//     if (passed) {
//       filterArray.push(number);
//     }
//   }

//   return filterArray;
// };

// const functionB = function (value) {
//   return value < 40;
// };

// const result = functionA([10, 20, 30, 40, 50], functionB);
// console.log(result);

// const functionA = function (numbers, callback) {
//   const filterArray = [];
//   for (const number of numbers) {
//     console.log(number);
//     const passed = callback(number);

//     console.log(passed);

//     if (passed) {
//       filterArray.push(passed);
//     }
//   }

//   return filterArray;
// };

// const functionB = function (value) {
//   return value < 40;
// };

// const result = functionA([10, 20, 30, 40, 50], functionB);
// console.log(result);

/* Сделай фильтр который выдаст в коносль массив со значениями выше 5 */

// const fnA = function (array, callback) {
//   const filterArray = []
//   console.log(array)

//   for(const number of array) {
//     console.log(number)

//     const passed = callback(number)
//     console.log(passed)

//     if(passed) {
//       filterArray.push(passed)
//     }
//   }
//   return filterArray
// }

// const fnB = function (value) {
//   return value >= 5
// }

// console.log(fnA([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fnB))

/* Выведи в консоль результат арифметического выражения */

// const fnA = function (a, b, c, callback) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   const j = callback(a, b, c)
//   console.log('Total amount of math operation:', j)

// }

// const fnB = function (x, y, z) {
//   return x + y * z - 20
// }

// fnA(20, 30, 2, fnB)

const fnA = function (a, b, c, callback) {
  const call = callback(a, b, c);
  console.log(call);
};
const fnB = function (x, y, z) {
  return x + y + z;
};

fnA(10, 20, 30, fnB);
