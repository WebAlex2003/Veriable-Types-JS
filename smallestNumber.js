// Напиши скрипт поиска самого маленького числа в массиве

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log(smallestNumber);

// task 1
/* Напиши скрипт поиска самого большого числа в массиве */

const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 200];
let biggestQuantity = quantities[0];

for (const quantity of quantities) {
  if (quantity > biggestQuantity) {
    biggestQuantity = quantity;
  }
}

console.log(biggestQuantity);

// Task 2
/* Напиши скрипт, который соединит все слова в одну строку */

// const friends = ["Mike1", "Mike2", "Mike3", "Mike4"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }

// console.log(string.slice());

// Task 2
/* Более эффективный способ решения */

const friends = ["Steve", "Mike", "Alex", "Ann"];

const string = friends.join(", ");

console.log(string);
