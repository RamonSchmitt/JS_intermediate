// What is closure?
var publicFunction = function() {
  var privateVariable = "something";
  var innerFunction = function() {
    return privateVariable;
  };
  return innerFunction;
};

var privateFunction = publicFunction();
console.log(privateFunction());