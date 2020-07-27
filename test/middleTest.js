const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3]), middle([3, 2, 1]));
assertArraysEqual(middle(["1", "2", "3","4","5"]), middle(["1", "2", "3"]));
assertArraysEqual(middle(["1", 3, "3"]), middle(["1", "2", 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 1]));
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 2, 1]));