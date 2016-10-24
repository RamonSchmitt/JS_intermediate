// forEach
var steps = ["brainstorm", "narrow", "protoyype", "test", "propose"];

steps.forEach (function(item, count) {
  switch(count) {
    case 0:
      console.log("First we " + item);
      break;
    case steps.length -1:
      console.log("Finally we " + item);
      break;
    default:
      console.log("Then we " + item);
  }
});

var fruits = {};
fruits.apple = {price:0.75};
fruits.orange = {price:0.65};
fruits.pear = {price:0.95};

Object.keys(fruits).forEach(function(fruit) {
  console.log(fruits[fruit].price);
});

// Map
var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

var forEachReturns = steps.forEach(function(item) {
  return item;
});

var mapReturns = steps.map(function(item) {
  return item; // ["brainstorm", "narrow", "prototype", "test", "propose"]
});

console.log(forEachReturns); // undefined
console.log(mapReturns); // ["brainstorm", "narrow", "protoyype", "test", "propose"]

var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

var capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var appendCount = function(word, index) {
  return word + " (" + index + ")";
};

var mapReturns = steps.map(capitalize).map(appendCount);

console.log(mapReturns);
console.log(steps);

// Reduce
var numbers = [1, 2, 3, 5, 8, 13];

var addThem = function(first, second, count, source) {
  console.log(count);
  return first + second;
};

var total = numbers.reduce(addThem, 20);
console.log(total);
