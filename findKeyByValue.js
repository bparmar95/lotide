const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const findKeyByValue = function(obj,val) {
  for (let i in obj) {
    if (obj[i] === val) {
      return i;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), "doc");
