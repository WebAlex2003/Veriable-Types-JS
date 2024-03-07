/* Перебор обьекта
-Для того что бы получить доступ к ключу обьекта нужно использовать метод Objects.keys
-Для того что бы получить доступ к значением ключей нужно использовать Objects.value */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const key = Object.keys(feedback);

// let totalFeedBack = 0;

// console.log(key);
// console.log(feedback);

// Task 1

// const fruits = {
//   apple: 5,
//   orange: 10,
//   banana: 10,
//   pineapple: 20,
// };

// const a = Object.keys(fruits);

// for (const key of a) {
//   console.log(key); // Получаем доступ к ключам
//   console.log(fruits[key]); // Получаем доступ к значениям
// }

// console.log(a);

/* Преобразуй обьект в массив
- перебери его с помощью цикла for
- Получи доступ к значению ключа
- Сложи значение каждого ключа и выведи значения в консоль */

// const items = {
//   ball: 1,
//   gun: 1,
//   table: 4,
//   spoon: 10,
//   copybook: 10,
// };

// let totalAmountItems = 0;

// const keys = Object.keys(items);

// for (const key of keys) {
//   console.log(key);
//   console.log(items[key]);

//   totalAmountItems += items[key];
// }

// console.log("total amount fruits:", totalAmountItems);

// Метод Object.value помогает получить доступ к значением ключа
/* Перебери обьект с помощью цикла и сложи значение всех ключей */

// const team = {
//   team: 10,
//   team1: 11,
//   team2: 12,
//   team3: 10,
// };

// let totalMembers = 0;

// const values = Object.values(team);

// for (const value of values) {
//   console.log(value);

//   totalMembers += value;
// }

// console.log("Total quantity members of team:", totalMembers);

/* Получи доступ к значением ключей обьекта */
