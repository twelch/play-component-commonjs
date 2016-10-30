/*
 * Module pattern 'Highly configurable' mutable plugin boilerplate
 * Author: @markdalgleish
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

var $ = jQuery = require('jquery');
var util = require('./util/util');
var plug4 = require('./plug4');

var Plugin = function( elem, options ){
  var defaultOptions = {
    message: "plug5!"
  };
  var elem = elem;
  var options = options;
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;

  function init() {
    options = util.extend({}, defaultOptions, options, dataOptions);
    _update();
    return Plugin;
  }

  function _update() {
    elem.innerHTML = options.message + 'extends ' + publicApi.getBase();
    console.log(options.message);
  }

  var publicApi = {
    init: init
  };

  // Extend plug4 object
  publicApi = util.extend({}, plug4(elem, options), publicApi);
  return publicApi;
}

module.exports = Plugin;

$.fn.plug5 = function(options) {
  return this.each(function() {
    new Plugin(this, options).init();
  });
};