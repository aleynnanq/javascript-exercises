const convertToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

console.log(convertToCelsius(32));

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
