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
