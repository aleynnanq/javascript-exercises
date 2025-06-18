const sumAll = (num1, num2) => {
  let sum = 0;
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
