'use strict';

// Expose jquery as global, browserify attaches to window
global.$ = global.jQuery = require('jquery');

var dots = module.exports = {};
dots.version = require('../package.json').version;

// Add plugins to library
dots.tipso = jQuery.tipso;
dots.plug1 = require('./plug1');
dots.plug2 = require('./plug2');
dots.plug3 = require('./plug3');
dots.plug4 = require('./plug4');
dots.plug5 = require('./plug5');
