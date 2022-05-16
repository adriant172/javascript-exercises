const add = function() {
  const result = arguments[0] + arguments[1];
  return result;
};

const subtract = function() {
	const result = arguments[0] - arguments[1];
  return result;
};

const sum = function(array) {
  let total = 0;
  for (number of array) {
    total += number;
  }
  return total;
	
};

const multiply = function(array) {
  let total = 1;
  if (!array) {
    return
  }
  for (number of array) {
    total = total * number;
  }
  return total;

};

const power = function(num, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * num;
  }
  return result;
	
};

const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
