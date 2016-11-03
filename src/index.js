'use strict';

// Expose jquery as global, browserify attaches to window
global.$ = global.jQuery = require('jquery');
var createPlugin = require('./util/jquery').createPlugin;

var dots = {};

dots.version = require('../package.json').version;

// Add plugins to library
dots.plug2 = require('./ui/plug2');
dots.plug3 = require('./ui/plug3');
dots.plug4 = require('./ui/plug4');
dots.plug5 = require('./ui/plug5');

dots.GLMap = require('./ui/map');

createPlugin('plug4', dots.plug4);
createPlugin('plug5', dots.plug5);
createPlugin('glmap', dots.GLMap);

if (window) {
  window.dots = dots;
} else if (typeof module !== 'undefined') {
  module.exports = dots;
}
