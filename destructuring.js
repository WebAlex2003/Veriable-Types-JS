// Деструктуризация

// const playlist = {
//   name: "My favourite playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };

/* Не современный метод */

// console.log(
//   playlist.name,
//   playlist.rating,
//   playlist.tracks,
//   playlist.trackCount
// );

/* Современный метод */
// const { name, rating, tracks, trackCount } = playlist;

// console.log(name)
// console.log(rating)
// console.log(tracks)
// console.log(trackCount)

// console.log(
//   playlist.name,
//   playlist.rating,
//   playlist.tracks,
//   playlist.trackCount
// );

// Task 1 деструктуризируй обьект

// const profile = {
//   name: "Alexey",
//   tag: "AnAlecvsfv",
//   location: "Ocho Rico, Jamaica",
//   avatar:
//     "https://visitukraine.today/media/blog/previews/4F7cVmsKNRZ6tw3yTtrE5IZQF10C6qnyePAwuJUl.webp",
//   stats: { followers: 5600, viws: 5000, likes: 2000 },
// };

// const {
//   name,
//   tag,
//   avatar,
//   stats: { followers, viws, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, viws, likes);

/* Task 2 */

// const information = {
//   name: "Alexey",
//   userName: "WebAlex2003",
//   age: 20,
//   experiance: 1.2,
//   areaActivity: "Frontend-developer",
//   knowledge: {
//     js: 2,
//     html: 5,
//     css: 4,
//   },
// };

// const {
//   name,
//   userName,
//   experiance,
//   areaActivity,
//   knowledge: { js, html, css,},
// } = information;

// console.log(name);
// console.log(userName);
// console.log(experiance);
// console.log(areaActivity);
// console.log(js);
// console.log(html);
// console.log(css);

/* Деструктуризация массива */

// const rgb = [100, 200, 20];

// const [a, b, c] = rgb;

// console.log(a, b, c);
// console.log(a);
// console.log(b);
// console.log(c);

/* Найди самый высокий рейтинг среди авторов */

// const rating = {
//   Mango: 1,
//   Poly: 2,
//   Ajax: 3,
//   Kivi: 5,
// };

// const value = Object.values(rating);

// console.log(Math.max(...value));
// console.log(Math.min(...value));
// console.log(rating);

// Операция rest

// const profile = {
//   name: "Alexey",
//   tag: "AnAlecvsfv",
//   place: "USA",
//   avatar:
//     "https://visitukraine.today/media/blog/previews/4F7cVmsKNRZ6tw3yTtrE5IZQF10C6qnyePAwuJUl.webp",
//   stats: { followers: 5600, views: 5000, likes: 2000 },
// };

// const { name, avatar, place, ...otherThings } = profile;

// console.log(name, avatar, place, otherThings);

/* Pattern 'Обьект настроек'  */
/* Не оптимизированный способ передачи аргументов параметрам  */
// const letterFunction = function (a, b, c, d, e, f) {};

// letterFunction(20, "True", 1000, "Stiven", [], {});

/* Оптимизированный способ */
/* Здесь мы распаковали массив и обьект и вывели в консоль простые типы */

const setOfInformation = {
  name: "Alexey",
  userName: "WebAlex2003",
  skills: {
    responsibility: 10,
    honest: 10,
  },
  experiance: [1, 2, 3],
};

const simpleFunction = function (arg) {
  console.log(arg);

  const {
    name,
    userName,
    experiance,
    skills: { responsibility, honest },
    experiance: [a, b, c],
  } = arg;

  console.log(name, userName, a, b, c, responsibility, honest);
};

simpleFunction(setOfInformation);
