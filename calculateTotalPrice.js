const calculateTotalPrice = function (items) {
  console.log(items);

  let total = 0;

  for (const item of items) {
    total += item;
  }
  return total;
};

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([10, 20, 30]));
console.log(calculateTotalPrice([100, 200, 300]));
