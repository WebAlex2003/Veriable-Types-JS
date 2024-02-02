const playlist = {
  name: "My favourite playlist",
  rating: 5,
  amountTrack: 3,
  nameTrack: ["Track-1", "Track-1", "Track-1"],
  price: 20,
};

console.log(playlist);

/* Для того что бы получить доступ к ключу со свойством в обьекте нужно к нему обратиться */

console.log(playlist.rating);
console.log(playlist.amountTrack);
console.log(playlist.name);
console.log(playlist.nameTrack);

// получить доступ через переменную

const price = "price";

console.log(playlist[price]);

/* Короткая запись свойств */

const name = "Alexey";
const email = "nikolenkolesha30032003@gmail.com";

const information = {
  name: name,
  email: email,
};

console.log(information);

/* Если имя переменной совпадает с ключом в обьекте, можно записать только ключ */

const item = "clothes";
const cost = 20;

const basket = {
  item,
  cost,
};

console.log(basket);

/* Вычисляемые свойства */
// <input name="color" value="tomato">

const inputName = "color";
const inputValue = "tomato";

const colorData = {
  [inputName]: inputValue,
};

/* Для того что бы добавить в обьект ключ со значением */
colorData.age = 5;

console.log(colorData);

