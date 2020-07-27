const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log("✔ Assertion Passed");
  } else {
    console.log("Assertion Failed");
  }
};



module.exports = assertArraysEqual;