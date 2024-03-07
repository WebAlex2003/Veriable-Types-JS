/* Методы обьекта this при обращении к свойствам  в методах */

// const playlist = {
//   name: "My favourite playlist",
//   rating: 5,
//   amountTrack: 3,
//   nameTrack: ["Track-1", "Track-1", "Track-1"],
//   price: 20,
//   changeName(newName) {
//     this.name = newName;
//   },
//   changePrice(newPrice) {
//     this.price = newPrice;
//   },
//   changeRating(newRating) {
//     this.rating = newRating;
//   },
//   changeAmountTrack(newTracks) {
//     this.amountTrack = newTracks;
//   },
//   addTrack(newTrack) {
//     this.nameTrack.push(newTrack);
//   },
// };

// playlist.changeName("Another playlist");
// playlist.changePrice(10);
// playlist.changeRating(6);
// playlist.changeAmountTrack(4);
// playlist.addTrack("Track-4");

// console.log(playlist);

/* Замени ключи в обьекте с помощью функции */

const profile = {
  name: "Alex",
  age: 20,
  favouriteColor: "white",
  proffesionalSkills: {
    html: 10,
    css: 10,
    js: 3,
  },
};

const {name, age, favouriteColor,...otherThings} = profile;

console.log(name, age, favouriteColor,otherThings)