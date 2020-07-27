const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, words.length);
