// Phone number validation without Regular Expressions
var phoneFormatted = function(submission) {
  var counter;
  var current;
  var submissionLength = submission.length;
  var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
  var separator = "-";

  if (typeof submission !== "string" || submissionLength !== 8) {
    return false;
  }
  for (counter = 0; counter < submissionLength; counter++) {
    current = submission[counter];
    if (numberArray.indexOf(current) === -1) {
      if (counter !== 3) {
        return false;
      } else if (current !== separator) {
        return false;
      }
    }
    return true;
  }
};


console.log(phoneFormatted("1234567"));
console.log(phoneFormatted("123-4567"));

// Phone number validation with Regular Expressions
var phoneFormattedRegex = function(submission) {
  return /^\d{3}-\d{4}$/.test(submission);
};

console.log(phoneFormattedRegex("1234567"));
console.log(phoneFormattedRegex("123-4567"));

// Testing for matches
var something = "cats";
var somethingMatches = new RegExp(something);
var source = "The kittens have mittens";

var result = somethingMatches.test(source);
console.log(result); //false

var source2 = "The cats have hats";

var result2 = somethingMatches.test(source2);
console.log(result2); //true

var itMatches = /it/;
var itMatchesInsensitive = /it/i;
var itAlsoMatchesInsensitive = new RegExp("it", "i");
var source = "THE KITTENS HAVE MITTENS";

console.log(itMatches.test(source)); //false
console.log(itMatchesInsensitive.test(source)); //false
console.log(itAlsoMatchesInsensitive.test(source)); //true

// Replacing
var source = "The kittens have mittens";
var itMatches = /it/;
var itMatchesGlobal = /it/g;
var itAlsoMatchesGlobal = new RegExp("it", "g");

console.log(source.replace(itMatches, "IT"));
console.log(source.replace(itMatchesGlobal, "IT"));
console.log(source.replace(itAlsoMatchesGlobal, "IT"));

var plusMatch = /12+3/;

console.log(plusMatch.test("123"));
console.log(plusMatch.test("1222222222223"));
console.log(plusMatch.test("13"));

var splatMatch = /12*3/;

console.log(splatMatch.test("123"));
console.log(splatMatch.test("1222222222223"));
console.log(splatMatch.test("13"));

var whiteSpace = /\s+/g;
var source = "   The   kittens     have mittens";
console.log(source.replace(whiteSpace, " "));

var errorWhiteSpace = new RegExp("\s+", "g");
console.log(source.replace(errorWhiteSpace, " "));

var alsoWhiteSpace = new RegExp("\\s+", "g");
console.log(source.replace(alsoWhiteSpace, " "));

// Delimiters and choices
var source = "The kittens have mittens";
var tteMatches = /t[te]/;
console.log(tteMatches.test(source));

var secondSource = "The cats have hats";
console.log(tteMatches.test(secondSource));

var thirdSource = "The cats hate hats";
console.log(tteMatches.test(thirdSource));

var source = "The cats hate hats";
var animalsMatches = /dogs|cats|horses|chickens/;
console.log(animalsMatches.test(source));

var source = "The cat hate hats";
var animalMatches = /dogs?|cats?|horses?|chickens?/;
console.log(animalMatches.test(secondSource));

// Match index
var source = "The kittens have mittens";
var vowelMatches = /[aeiou]/;
console.log(source.match(vowelMatches));
console.log(source.search(vowelMatches));

var source = "The kittens have mittens";
var vowelMatches = /[aeiou]/g;
console.log(vowelMatches.exec(source));
console.log(vowelMatches.lastIndex);
console.log(vowelMatches.exec(source));
console.log(vowelMatches.lastIndex);

var source = "The kittens have mittens";
var vowelMatches = /[aeiou]/g;
var match;
while (match = vowelMatches.exec(source)) {
  console.log(match[0] + " was found at " + vowelMatches.lastIndex);
}

var vowelMatches = /[aeiou]/g;
console.log(vowelMatches.source);
console.log(vowelMatches.flags);
console.log(vowelMatches.toString());
console.log(vowelMatches.toString().match(/[gimuy]*$/)[0]);

// Useful Patterns
var source = "The kittens have mittens";
var ryhmesKittensMatch = /[a-z]ittens/;
console.log(ryhmesKittensMatch.test(source));

var startsCapitalMatch = /^[A-Z]/;
console.log(startsCapitalMatch.test(source));

var onlyLettersMatch = /^[a-zA-Z]$/;
console.log(onlyLettersMatch.test(source));

var source = "There are 100 cats";
var numberMatch = /\d+ cats/;
console.log(numberMatch.test(source));

var noNumberMatch = /\D cats/;
console.log(noNumberMatch.test(source));

var onlyLettersNumbers = /^[\w]+$/;
console.log(onlyLettersNumbers.test(source));

var onlyLettersNumbersSpaces = /^[\w\s]+$/;
console.log(onlyLettersNumbersSpaces.test(source));

var source = "There are 100 cats";
var secondSource = "There are 10 cats";
var thirdSource = "There are 10000 cats";

var hundredsMatch = /\D\d{3} cats/;
console.log(hundredsMatch.test(source));
console.log(hundredsMatch.test(secondSource));
console.log(hundredsMatch.test(thirdSource));

var upToThousandsMatch = / \d{3,4} cats/;
console.log(upToThousandsMatch.test(source));
console.log(upToThousandsMatch.test(secondSource));
console.log(upToThousandsMatch.test(thirdSource));

var source = "The kittens have mittens.";
var endsPeriodMatch = /\.$/;
console.log(endsPeriodMatch.test(source));

var alsoEndsPeriodMatch = new RegExp("\\.$");
console.log(alsoEndsPeriodMatch.test(source));
