const base = 100;
const power = 5;

const result = Math.pow(base, power);

console.log(result);

const after = 3;
const before = 6;

console.log(Math.pow(3, 6));

// Task 1

let major = prompt("give me your number");
major = Number(major);

let degree = prompt("give me your degree");
degree = Number(degree);

const finish = major ** degree;

console.log(finish);

// console.log(Math.pow(major, degree));

// Псевдослучайные числа

const min = 1;
const max = 100;

console.log(Math.random() * (max - min) + min);
