// What is Closure?
var publicFunction = function() {
  var privateVariable = "something";
  var innerFunction = function() {
    return privateVariable;
  };
  return innerFunction;
};

var privateFunction = publicFunction();
console.log(privateFunction());

// Uses for Closures
var tracking = {};
function trackActions(item, choice) {
  if (choice) {
    tracking[item] = choice;
  }
  return tracking[item];
}
trackActions("red", "click");
console.log(trackActions("red"));
console.log(tracking.red);

function actionTracker(choice) {
  var tracking = {};
  return function(action) {
    if (action) {
      tracking[choice] = action;
    }
    return tracking[choice];
  };
}

var redTracker = actionTracker("red");
var blueTracker = actionTracker("blue");
var secretTracker = actionTracker("secret");

console.log(blueTracker());
blueTracker("click");
console.log(blueTracker());
redTracker("touch");
console.log(redTracker());

function actionTracker(choice) {
  var tracking = {};
  return {
    setAction: function(action) {
      if (action) {
        tracking[choice] = action;
      }
    },
    getAction: function() {
      return tracking[choice];
    }
  };
}

var redTracker = actionTracker("red");
redTracker.setAction("click");
console.log(redTracker.getAction());

// Surprising Closure behaviour
var counter;
var functions = [];
var values = [];
for (counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = function() {
    return counter;
  };
}
console.log(values[0]);
console.log(values[2]);
console.log(values[4]);
console.log(functions[0]());
console.log(functions[2]());
console.log(functions[4]());

var counter;
var functions = [];
var values = [];
var makeReturner = function(value) {
  return function() {
    return value;
  };
};
for(counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = makeReturner(counter);
}
console.log(values[0]);
console.log(values[2]);
console.log(values[4]);
console.log(functions[0]());
console.log(functions[2]());
console.log(functions[4]());

// ES6
var functions = [];
var values = [];
for (let counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = function() {
    return counter;
  };
}
console.log(values[0]);
console.log(values[2]);
console.log(values[4]);
console.log(functions[0]());
console.log(functions[2]());
console.log(functions[4]());
