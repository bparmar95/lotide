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

const without = function(source, remove) {
  var sourceCopy = [...source]
  for (var i = 0; i < remove.length; i++) {
    if (source.includes(remove[i])) {
      for (var j = 0; j < sourceCopy.length; j++) {
        if (remove[i] === sourceCopy[j]) {
          sourceCopy.splice(j,1);
        }
      }
    }
  }
  return sourceCopy;
}
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", "2", "3"], ["1", "2", "3"]));
console.log(without(["1"], ["1", "2", "3"]));
console.log(without(["1", "2", "3"], ["1", "2", "hi"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);