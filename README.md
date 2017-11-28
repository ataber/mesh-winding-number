# mesh-winding-number

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Computes [winding number](https://en.wikipedia.org/wiki/Winding_number) of a triangle mesh at a point. Uses formulae and ideas from [this paper](http://igl.ethz.ch/projects/winding-number/robust-inside-outside-segmentation-using-generalized-winding-numbers-siggraph-2013-jacobson-et-al.pdf).

## Usage

[![NPM](https://nodei.co/npm/mesh-winding-number.png)](https://www.npmjs.com/package/mesh-winding-number)

```javascript
var bunny   = require('bunny')
var patches = require('mesh-winding-number')([0,1,0], bunny.cells, bunny.positions); # returns 1
```

`require("mesh-winding-number")(point, cells, positions)`
----------------------------------------------------
Returns a float representing winding number at `point`. Note that due to floating point errors you may get slightly off of the correct integer value even for closed meshes. Furthermore, the result scales with mesh quality (for instance, the less watertight the mesh, the more likely the result is far from an integer value).

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/ataber/mesh-winding-number/blob/master/LICENSE.md) for details.
