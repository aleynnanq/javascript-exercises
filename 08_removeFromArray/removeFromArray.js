const removeFromArray = (arr, ...argsToRemove) =>
  arr.filter((item) => !argsToRemove.includes(item));

let arr = [1, 2, 3, 4];

console.log(removeFromArray(arr, 3));

// Do not edit below this line
module.exports = removeFromArray;
