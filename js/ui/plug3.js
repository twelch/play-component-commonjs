/*
 * 'Highly configurable' mutable plugin boilerplate
 * Author: @markdalgleish
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

'use strict';

var $ = jQuery = require('jquery');

// Note that with this pattern, as per Alex Sexton's, the plugin logic
// hasn't been nested in a jQuery plugin. Instead, we just use
// jQuery for its instantiation.
var Plugin = function(elem, options) {
  this.elem = elem;
  this.$elem = $(elem);
  this.options = options;

    // Option - override options from data attribute
    // <div class=item' data-plugin-options='{"message":"Goodbye World!"}'></div>
  this.metadata = this.$elem.data('plugin-options');
};

// the plugin prototype
Plugin.prototype = {
  'defaultOptions': {
    'message': 'plug3!'
  },

  'init': function() {
    // Introduce defaultOptions that can be extended either
    // globally or using an object literal.
    this.config = $.extend({}, this.defaultOptions, this.options,
    this.metadata);
    this.sampleMethod();
    
    return this;
  },

  'sampleMethod': function() {
    this.$elem.html(this.config.message);
    console.log(this.config.message);
  }
};

// Option - override static defaultOptions globally
// e.g. Plugin.defaultOptions.message = 'Goodbye World!'
Plugin.defaultOptions = Plugin.prototype.defaultOptions;

module.exports = Plugin;

$.fn.plug3 = function(options) {
  return this.each(function() {
    new Plugin(this, options).init();
  });
};
