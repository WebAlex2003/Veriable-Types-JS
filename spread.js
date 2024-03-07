/* Метод concat */
// const numbers = [20, 20, 200, 20];
// const newNumbers = [10, 20, 30, 40, 50];

// const totalQuantity = numbers.concat(newNumbers);

// console.log(totalQuantity)

/* Операция Spread (Распылитель) */

// const numbers = [20, 30, 40, ...[20, 30, 40], 100, 200];

// const max = Math.max(...numbers)
// const min = Math.min(...numbers)

// console.log(max)
// console.log(min)

/* Сшиваем несколько массивов в один массив в помощью метода - concat и оператора spread */
// Concat method
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// const c = [7, 8, 9]

// const generalArray = a.concat(b, c)

// console.log(generalArray)

// Spred operator

// const d = [1, 2, 3]
// const e = [4, 5, 6]
// const f = [7, 8, 9]

// const general = [...d, ...e, ...f]

// console.log(general);

/* Распыли обьект  */

// const clasess = { math: 3, PI: 4 };
// const difficultClasess = { biology: 5, sience: 3 };

// const disciplines = Object.assign({}, clasess, difficultClasess);

// console.log(disciplines);

/* Современный стандарт распыления обьекта */

// const a = { math: 3, PI: 4 };
// const b = { biology: 5, sience: 3 };

// const disciplines = {
//   ...a,
//   ...b,
// };

// console.log(disciplines);

/* Переписываем базовые значения при настройке профиля с помощью Spread*/

// const defaultSettings = {
//   theme: "light",
//   userName: "user2000",
//   age: 0,
// };

// const userSetting = {
//   theme: "black",
//   userName: "WebAlex2003",
//   age: 20,
// };

// const finalSetting = {
//   ...defaultSettings,
//   ...userSetting,
// };

// console.log(finalSetting);
