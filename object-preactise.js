// Practise
/* Создай обьект с 5 ключей, получи к ним доступ и измени значение */

// const object = {
//   value1: 1,
//   value2: 2,
//   value3: 3,
//   value4: 4,
// };
// object.value1 = 2;
// object.value2 = 3;
// object.value3 = 4;
// object.value4 = 5;
// console.log(object);

/*  */

// const name = "Alexey";
// const email = "nikolenkolesha30032003@gmail.com";

// const info = {
//   name,
//   email,
// };
// console.log(info);

/*  */

// const feature = "math";
// const value = "difficult";

// const characteristics = {
//   [feature]: value,
// };

// console.log(characteristics);

/* Добавь в обьект ключ со значением */

// const equipments = {
//   basket: 1,
//   ball: 2,
//   tracksuit: 1,
// };

// equipments.sneakers = 5;

// console.log(equipments);

/* Methods in function */

// const favouriteMovie = {
//   movie1: "Alone at home",
//   movie2: "Commandos",
//   movie3: "Hachiko",
//   movie4: "Cobra",

//   otherChoise(otherMovie) {
//     this.movie1 = otherMovie;
//   },

//   otherFavouriteMovie(newMovie) {
//     this.movie2 = newMovie;
//   },
// };

// favouriteMovie.otherChoise("Sex in big city");
// favouriteMovie.otherFavouriteMovie("JackPot");

// console.log(favouriteMovie);

/* Преврати обьект  в массив и перебери его с помощью цикла for и сложи количевство каждой комманды*/

// const teams = {
//   team1: 11,
//   team2: 1,
//   team3: 20,
//   team4: 13,
//   team5: 12,
// };

// const keys = Object.keys(teams);
// let totalMembers = 0;

// for (const key of keys) {
//   console.log(teams[key]);
//   console.log(key);

//   totalMembers += teams[key];
// }

// console.log(totalMembers);

/* Перебери массив значений и сложи значения каждого свойства с помощью метода Object.values */

// const add = {
//   pigs: 10,
//   cows: 20,
//   horses: 10,
//   calfs: 20,
//   dogs: 10,
//   cats: 20,
//   chikens: 100,
// };

// const features = Object.values(add);
// let totalAnimal = 0;

// for (const feature of features) {
//   console.log(feature);

//   totalAnimal += feature;
// }

// console.log(`Amount of animals in my neighborhood: ${totalAnimal}`);

/* Collection objects in array */

// const arrayFriends = [
//   { name: "Oleg", age: 20 },
//   { name: "Victor", age: 20 },
//   { name: "Stiven", age: 25 },
//   { name: "Olga", age: 20 },
// ];

// const friendsvalue = Object.values(arrayFriends)

// for(const value of friendsvalue) {
//     console.log(value.name)
//     console.log(value.age)
// }
// console.log(friendsvalue);

/* Выведи в консоль друзей которые онлайн */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: true },
//   { name: "Kivi", online: false },
// ];

// const onlineFriends = function (allFriends) {
//   const onlineFriend = [];

//   for (const friend of allFriends) {
//     console.log(friend.online);

//     if (friend.online === true){
//       onlineFriend.push(friend);
//     }
//   }
//   return onlineFriend;
// };

// console.log(onlineFriends(friends));




