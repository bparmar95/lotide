const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !=== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  object1Keys = Object.keys(object1);
  object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object1[i])) {
      if ((eqArrays(object1[i],object2[i])) === false)  {
        return false;
      }
    } else if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

console.log(assertEqual(eqObjects(ab, ba), true));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
console.log(assertEqual(eqObjects(cd, cd2), true));