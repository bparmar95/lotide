

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects(actual,expected) === true) {
    console.log("✔ Assertion Passed");
  } else {
    console.log("Assertion Failed");
  }
  console.log(`Example label: ${inspect(actual)}`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })