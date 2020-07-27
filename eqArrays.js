const assertEqual = require('./assertEqual');

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


module.exports = eqArrays;