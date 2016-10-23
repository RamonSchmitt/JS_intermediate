// Arrays as Indexed Data
var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];
var stepTerm;
for (var counter = 0; counter < steps.length; counter++)
  {
    switch(counter) {
      case 0:
        stepTerm = "First";
        break;
      case steps.length - 1:
        stepTerm = "Finally";
        break;
      default:
        stepTerm = "Then";
    }
    console.log(stepTerm + " we " + steps[counter]);
  }


  // Objects as Keyed Data
  var fruits = {};
  fruits.apple = {"skin color":"red", "price":0.75};
  fruits.orange = {"skin color":"orange", "price":0.65};
  fruits.pear = {"skin color":"green", "price":0.95};
  console.log(fruits.apple.color);
  console.log(fruits);

  var vanilla = {"color":"neutral", "size":"medium"};
  for (item in vanilla) {
    console.log("vanilla." + item + "=" + vanilla[item]);
  }

  Object.prototype.extender = "Hahahahaha";
  for (item in vanilla) {
    console.log("vanilla." + item + "=" + vanilla[item]);
  }

  for (item in vanilla) {
    if (vanilla.hasOwnProperty(item)) {
        console.log("vanilla." + item + "=" + vanilla[item]);
    }
  }

  var fruits = {};
  fruits.apple = {"skin color":"red", "price":0.75};
  fruits.orange = {"skin color":"orange", "price":0.65};
  fruits.pear = {"skin color":"green", "price":0.95};

  delete fruits.pear.price;
  console.log(fruits.pear.price);

  fruits.apple.price = 0.70;
  fruits.apple["skin color"] = "green";
  for (var key in fruits.apple) {
    if (fruits.apple.hasOwnProperty(key)) {
      console.log(key + " = " + fruits.apple[key]);
    }
  }

  //Array Data Methods
  var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

  steps.push("profit");
  console.log(steps);

  var popped = steps.pop();
  console.log(steps);
  console.log(popped);

  steps.unshift("drink");
  console.log(steps);

  var shifted = steps.shift();
  console.log(steps);
  console.log(shifted);

  var stack = [];
  stack.push("urgent");
  stack.push("super urgent");
  stack.push("ultra urgent");
  console.log(stack);

  var current = stack.pop();
  console.log(current);
  console.log(stack);

  var queue = [];

  queue.push("brainstorm");
  queue.push("narrow");
  queue.push("protoptype");
  console.log(queue);

  current = queue.shift();
  console.log(current);
  console.log(queue);

  // Object Data Methods
  var fruits = {};
  fruits.apple = "red";
  fruits.orange = "orange";
  fruits.pear = "green";
  console.log(Object.keys(fruits));

  Object.prototype.newProperty = "Hahahaha";
  console.log(fruits);
  console.log(Object.keys(fruits));

  for (var item in fruits) {
    console.log("fruits." + item + " = " + fruits[item]);
  }

  var Food = function(name) {
    var label = name;
    this.edible = true;
    this.formal = function() {
      return name.toUpperCase() + ", ESQ.";
    };
  };

  var apple = new Food("apple");
  console.log(apple.label);
  console.log(apple.edible);
  console.log(apple.formal());
  console.log(typeof apple);

  var Food = function(name) {
  //  var label = name;
    this.label = name;
    this.edible = true;
  };

  Food.prototype.formal = function() {
    return this.label.toUpperCase() + ", ESQ.";
  };

  var apple = new Food("apple");
  console.log(apple.label);
  console.log(apple.edible);
  console.log(apple.formal());
  console.log(typeof apple);

  // ES6
  class Food {
    constructor(name) {
      this.label = name;
      this.edible = true;
    }
    formal() {
      return this.label.toUpperCase() + ", ESQ.";
    }
  }

  var apple = new Food("apple");
  console.log(apple.label);
  console.log(apple.edible);
  console.log(typeof apple);
  console.log(apple.formal());
