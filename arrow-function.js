// Стрелочные функции

/* Простая функция */
// const fnA = function (a, b, c) {
//     console.log(a, b, c)

//     return a + b + c
// }

// const fn = fnA(10, 10, 10)
// console.log(fn)

/* Стрелочная функция */

// const fnA = (a, b, c) => {
//     return a + b + c
// }

// const fn = fnA(10, 10, 10)
// console.log(fn)

/* Cтрелочная функция в более примитивном виде
Результат можно вывести в одну строку через стрелочную функцию, ео если нужно вернуть сложный тип данных то нужно обьект или массив обернуть в выражение, то есть в () */

const fnA = (a, b, c) => a + b + c;

const fn = fnA(10, 10, 10);
console.log(fn);

/* Task 1 верни в консоль обьект с ключом в котором будет храниться значение */

const fnB = () => ({ name: "Alexey", age: 21, profession: "Web-developer" });

console.log(fnB())