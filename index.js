var vec3 = require('gl-vec3');
var mat3 = require('gl-mat3');

module.exports = function(point, cells, positions) {
  return cells.reduce(function(acc, cell) {
    var triangle = [positions[cell[0]], positions[cell[1]], positions[cell[2]]];
    var a = vec3.subtract([], triangle[0], point);
    var b = vec3.subtract([], triangle[1], point);
    var c = vec3.subtract([], triangle[2], point);
    var la = vec3.length(a);
    var lb = vec3.length(b);
    var lc = vec3.length(c);
    var abc = [
      a[0], a[1], a[2],
      b[0], b[1], b[2],
      c[0], c[1], c[2]
    ];
    var numerator = mat3.determinant(abc);
    var denominator = (la * lb * lc) +
                      vec3.dot(a, b) * lc +
                      vec3.dot(b, c) * la +
                      vec3.dot(c, a) * lb;
    var sumTerm = 2 * Math.atan(numerator / denominator);
    return acc + sumTerm;
  }, 0) / (4 * Math.PI);
};
