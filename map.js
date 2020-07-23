const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

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

console.log(assertArraysEqual(results1, ['g','c','t','m','t']));
console.log(assertArraysEqual(results1, ['g','c','t','m']));
console.log(assertArraysEqual(results1, ['go','cow','to','moo']));
console.log(assertArraysEqual(results1, map(['go','cow','to','moo','too'],word => word[0])));