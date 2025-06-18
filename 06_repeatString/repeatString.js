const repeatString = (str, num) => {
  let result = "";
  if (num < 0) {
    return "";
  }
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

let str = "hey";
let num = 3;

console.log(repeatString(str, num));

// Do not edit below this line
module.exports = repeatString;
