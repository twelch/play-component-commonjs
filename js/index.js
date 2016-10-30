'use strict';

// Expose jquery as global, browserify attaches to window
global.$ = global.jQuery = require('jquery');
var createPlugin = require('./jquery-util').createPlugin;

var dots = module.exports = {};
dots.version = require('../package.json').version;

// Add plugins to library
dots.plug1 = require('./plug1');
dots.plug2 = require('./plug2');
dots.plug3 = require('./plug3');
dots.plug4 = require('./plug4');
dots.plug5 = require('./plug5');

createPlugin('plug4', dots.plug4);
createPlugin('plug5', dots.plug5);