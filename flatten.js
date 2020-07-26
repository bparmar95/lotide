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

const flatten = function(arr) {
  let newArr = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let j of i) {
        newArr.push(j);
      }
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2,[], [3, 4], 5, [6]]));
console.log(flatten([[1,9], 2, [3, 4,5,6], 5, [6]]));