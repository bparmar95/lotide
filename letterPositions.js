const letterPositions = function(sentence) {
  const results = {};
  for (let letter = 0; letter < sentence.length; letter++) {
    if (sentence[letter] !== " ") {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(letter);
      } else {
        results[sentence[letter]] = [letter];
    }
  }
}
  return results;
};

console.log(letterPositions("hello"));

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log("✔ Assertion Passed");
  } else {
    console.log("Assertion Failed");
  }
};

const eqArrays = function(arr1,arr2) {
  val = ""
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        val = true;
      } else {
        return false;
      }
    }
    return val;
  }
  return false;
}

console.log(assertArraysEqual(letterPositions("hello").e, [1]));