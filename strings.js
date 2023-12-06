const message = "This message consist of 34 latters";
// для того что бЫ определить длину строки нужно обратится к свойству length

console.log(message.length);

// Контактенация строк
let age = 25;
let UserName = "WebAlex30032003";
let edu = 1;

console.log("age " + "UserName " + "edu ");

// Поиск строки с помощью свойства includes
const blacklistedword1 = "lives";
const blacklistedword2 = "cheap";

const string1 = "FatLivesMatter";
const string2 = "What ever it is you're doing in lives you can always do more";
const string3 = "cheap and height quality clothes";

console.log(string1.toLowerCase().includes(blacklistedword1));
console.log(string1.toLowerCase().includes(blacklistedword2));

console.log(string2.includes(blacklistedword1));
console.log(string2.includes(blacklistedword2));

console.log(string3.includes(blacklistedword1));
console.log(string3.includes(blacklistedword2));
