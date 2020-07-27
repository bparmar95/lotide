const assert = require('chai').assert;
const tail = require('../tail');


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(words).length, words.length);

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })

  it("returns ['Labs'] for [Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs"]), ["Labs"]);
  })

});