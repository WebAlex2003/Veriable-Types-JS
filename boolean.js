// < >
// true
console.log("5" > 10);
console.log(Number("5"));
// false
console.log(10 > 5);
// boolean
const x = 6 > 7;
// true in boolean (string) and(digits)
console.log(Boolean("hunter"));
console.log(Boolean(5));
console.log(Boolean());
// false only 6 values
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));

// Логическое And
// -Порядок перечисление идет слева на право
// -Запинается на лжи

console.log(30 && undefined && 30 && true);
console.log(20 && 30 && "title" && "Forever Faster");

// Логическое Or
// -Запинается на правде
// -Возвращает то над чем запнулось, или последний операнд
console.log(0 || 0 || 0 || 30 || 40);
console.log(false || NaN || undefined || "Forever Faster");

// Логическое Not
// Оператор "!" преобразует истинное значение в ложное и ложное значение в истинное.
console.log(!true);
console.log(!false);

const FirstName = "Mike";
const LastName = "Jeff";

const type = "flat";
const room = 716;

console.log(
  "гость " + FirstName + "",
  LastName + "",
  "live in ",
  type + "",
  room
);

console.log(`Гость ${FirstName} ${LastName} live in ${type} ${room}`);

const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`число ${x1} попадает ли в ${number} ?`, number < x1);
console.log(`число ${x2} больше чем число ${number} ?`, number < x2);
console.log(`число ${number} больше чем число ${x2} ?`, number > x2);

// Task 1
// С помощью логического And
// в первом примере результат в браузерной консоле будет true, потому что оба значения истинны.
console.log(number > x1 && number > x2); 
// результат будет false потому что логическое And запинается на лжи 
console.log(number < x2 && number > x1);
// результат будет false потому, запинается на лжи
console.log(number > x1 && number < x2);

// С помощью логического Or 
// результат будет True потому что оба значения истинны
console.log(number > x2 || number > x1);
// результат будет True потому что логическое Or запинается на правде
console.log(number < x2 || number > x2);

//  Task 2
// Напиши скрипт который проверяет возможность открыть чат с пользователем.
// Для этого пользователь должен быть
// - frined
// - online
// - with out state Dnd.
const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат ?', canOpenChat,);