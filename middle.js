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

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[Math.floor(arr.length/2)]];
  } else if (arr.length % 2 === 0) {
    return [arr[(arr.length/2)-1],arr[arr.length/2]]
  }
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3])));
console.log(assertArraysEqual(middle([1, 2, 3]), middle([3, 2, 1])));
console.log(assertArraysEqual(middle(["1", "2", "3","4","5"]), middle(["1", "2", "3"])));
console.log(assertArraysEqual(middle(["1", 3, "3"]), middle(["1", "2", 3, 4, 5])));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 1])));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 2, 1])));