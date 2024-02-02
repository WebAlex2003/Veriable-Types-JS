/* Работа с коллекцией (массивом обьектов) */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: true },
//   { name: "Kivi", online: false },
// ];

// console.table(friends);

// const key = Object.values(friends);

// for (const friend of friends) {
//     console.log(friend.name)
//   console.log(friend.online);
// }

// Task 1
/* Ищем друга по имени */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: true },
//   { name: "Kivi", online: false },
// ];

// console.log(friends);
// const findfriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend.name);

//     if (friend.name === name) {
//     }
//   }

//   return `name ${name} is found`;
// };

// console.log(findfriendByName(friends, "Poly"));
// console.log(findfriendByName(friends, "Ajax"));

/* Выведи все значение в консоль из массива обьектов */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: true },
//   { name: "Kivi", online: false },
// ];

// const friendFunction = function (allName) {
//   for (const friend of allName) {
//     console.log(friend.name);
//   }
// };

// friendFunction(friends);

/* Вывести в консоль всех друзей которые online */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: true },
//   { name: "Kivi", online: false },
// ];

// const friendFunction = function (allFriends) {
//     const onlineFriends = [];

//     for(const friend of allFriends) {
//         console.log(friends)
//         console.log(friend.online)

//         if(friend.online) {
//             onlineFriends.push(friend)
//         }
//     }

//     return onlineFriends
// }

// console.log(friendFunction(friends));

/* Вывести в консоль друзей которые оффлайн */

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: true },
//     { name: "Kivi", online: false },
//   ];

//   const friendFunction = function (allFriends) {

//     const offlineArray = []

//     for(const friend of friends) {
//         console.log(friend.online)

//         if(friend.online === false) {
//             offlineArray.push(friend)
//         }
//     }

//     return offlineArray
//   }

//   console.log(friendFunction(friends));

/* Выведи в консоль друзей онлайн и оффлайн с помощью универсального обьекта 'getFriendBystatus' */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Kivi", online: false },
// ];

// const friendFunction = function (allFriends) {
//   const getFriendBystatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of friends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online === true) {
//       getFriendBystatus.online.push(friend);
//     } else {
//       getFriendBystatus.offline.push(friend);
//     }
//   }
//   return getFriendBystatus;
// };

// console.log(friendFunction(friends));
