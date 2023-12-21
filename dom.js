const btnAdd = document.querySelector("button[data-add]");
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output span");
const btnDelete = document.querySelector("button[data-delete]");

let total = 0;

btnAdd.addEventListener("click", function () {
  console.log(" we have sent it on server");

  const value = Number(valueInput.value);

  console.log(Number(valueInput.value));

  total += value;

  outputEl.textContent = total;
  //   console.log("total", total);

  valueInput.value = "";

  btnDelete.addEventListener("click", function () {
    total = 0;
    outputEl.textContent = total;
  });
});
