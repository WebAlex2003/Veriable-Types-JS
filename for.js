// Цикл For
// from 0 to 100.
for (let b = 0; 100 >= b; b += 1) {
  console.log(b);
}

// from 100 to 0
for (let a = 100; 0 < a; a -= 1) {
  console.log(a);
}

// from 50 to 100
for (let s = 50; 100 >= s; s += 1) {
  console.log(s);
}

// from 100 to 50
for (let d = 100; 50 < d; d -= 1) {
  console.log(d);
}

// from 40 to 80 with interval - 3
for (let e = 40; 80 > e; e += 3) {
  console.log(e);
}

// from 80 to 40 with interval - 3
for (let f = 80; f > 40; f -= 3) {
  console.log(f);
}

// from 100 to 500 with interval 1
for(let g = 100; 500 > g; g += 1) {
  console.log(g)
}

// Task 1
// Напиши скрипт который подсчитывает общую сумму зарплат работников.
// количество работников хранится в переменной employees.
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

const minSalary = 500;
const maxSalary = 5000;
const employees = 10;
let totalSalary = 0;

for (let i = 1; employees >= i; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`Salary of each employee ${i} - ${salary}`);

  totalSalary += salary;
}

console.log("Total salary:", totalSalary);

// Task 2
// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон чисел в переменных от min до max
// Например если min=0 и max=5, диапазон 0-5, и в нем два четных числа - 2 и 4, их сумма 6

const min = 0;
const max = 20;
let totalAmount = 0;

for (let i = min; max >= i; i += 1) {
  console.log(i);
  if (i % 2 === 0) {
    console.log("четное число: ", i);
  }

  totalAmount += i;
}

console.log("Total amount: ", totalAmount);
