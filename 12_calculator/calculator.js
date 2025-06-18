const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((previousSum, currentNum) => {
    return previousSum + currentNum;
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((accumulator, currentNum) => {
    accumulator * currentNum;
  }, 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (n) {
  if (n < 0) {
    return "Error: Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
