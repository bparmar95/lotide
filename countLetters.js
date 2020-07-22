const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countLetters = function(str) {
  results = {};
  for (let letter of str) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}
console.log(countLetters("hell  o"));
console.log(countLetters("lighthouse in the house"));