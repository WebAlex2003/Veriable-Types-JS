/* Напиши функцию logItems(items) для перебора  и логирования массива */
// const logItems = function (items) {

//   for (const item of items) {
//     console.log(item)
//   };
// }

// logItems([1, 2, 3, 4, 5]);
// logItems(["Mike", "Jack", "Brayn", "Joe"]);
// logItems(["Kivi", "Mono", "Privat"]);

/* Напиши функцию findLogin (allLogin, login) для посика логина
- если логина нет, вывести сообщение пользователь [логин] не найден
- если нашли логин вывести сообщение пользователь [логин] найден */

// const logins = ["WebAlex2003", "Alexe2003", "OlegKoltavski", "lesha30032003"];
// const loginToFind = "lesha30032003";
// let message = "";

// const general = logins.includes(loginToFind)
//   ? `login ${loginToFind} was found`
//   : `login ${loginToFind} wasnt found`;

//   console.log(general); 

// Task 1

// const logins = ["WebAlex2003", "Alexe2003", "OlegKoltavski", "lesha30032003"];

// const findLogin = function (allLogins, findToLogin) {
//   let message = `Пользователь ${findToLogin} не найден`;

//   for (const login of allLogins) {
//     if (login === findToLogin) {
//       message = `Пользователь ${findToLogin} найден`;
//     }
//   }

//   return message;
// };

// console.log(findLogin(logins, "Alexe2003"));
// console.log(findLogin(logins, "WebAlex2003"));
// console.log(findLogin(logins, "AN12220"));
// console.log(findLogin(logins, "OlegKoltavskiY"));

// Тернарный оператор
/* Напиши функцию findLogin (allLogin, login) для посика логина
- если логина нет, вывести сообщение пользователь [логин] не найден
- если нашли логин вывести сообщение пользователь [логин] найден */

// const names = ["WebAlex2003", "Alexe2003", "OlegKoltavski", "lesha30032003"];

// const findFunction = function (allLogins, loginToFind) {
//   let resoult = allLogins.includes(loginToFind)
//     ? `логин ${loginToFind} найден`
//     : `логин ${loginToFind} не найден`;

//     return resoult;
// };

// console.log(findFunction(names, "WebAlex2003"));
// console.log(findFunction(names, "Alexe2003"));
// console.log(findFunction(names, "OlegKoltavskiy"));
// console.log(findFunction(names, "lesha300320032"));
