/* Замыкания */

// const fnA = function () {
//   const innerVeriable = "Hi this is inner veriable";

//   const innerFunction = function () {
//     console.log("это функция innerFunction");
//   };

//   return innerFunction
// };

// const fnB = fnA()
// fnB()
// console.log(fnB)

/* Task 1 */

// const fnA = function (nameChef, dish) {
//   console.log(`${nameChef} coocking tasty and extremly delicies ${dish}`);
// };

// fnA("Mango", "pie");
// fnA("Mango", "chicken");
// fnA("Mango", "fried potatoes");
// fnA("Poly", "pie");
// fnA("Poly", "chicken");
// fnA("Poly", "fried potatoes");

/* Замкни имя шева и присвой ему новое значение при каждом вызове */

// const makeChef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} coocking tasty and extremly delicies ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeChef("Mango");
// mango("fried potato");
// mango("cherry pies");
// mango("porridge");
// mango("salad");

// const poly = makeChef("Poly");
// poly("soup with crown");
// poly("soup with crown");
// poly("soup with crown");
// poly("soup with crown");

/* Task from book */

/* Приведи выборочные слова к нижнему регистру и проверь на наличия запрещеных слов  */

// const filterFunction = function (message) {
//   if (message.includes("fruits") || message.includes("discount")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(filterFunction("there are a lot of fruits"));
// console.log(filterFunction("lots of not tasty vegetable"));
// console.log(filterFunction("you gotta buy useful products including fruits"));
// console.log(filterFunction("Why you dont want buy a new car in discount "));
// console.log(
//   filterFunction(
//     "I will buy new clothes and shoes on Black friday because will be good discount"
//   )
// );

