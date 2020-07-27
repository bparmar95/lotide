const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[Math.floor(arr.length/2)]];
  } else if (arr.length % 2 === 0) {
    return [arr[(arr.length/2)-1],arr[arr.length/2]]
  }
}
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

module.exports = middle;