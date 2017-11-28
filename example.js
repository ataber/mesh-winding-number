var bunny = require('bunny');
var windingNumber = require('./index.js');

console.log(windingNumber([0, 1, 0], bunny.cells, bunny.positions));
console.log(windingNumber([0, -10, 0], bunny.cells, bunny.positions));
