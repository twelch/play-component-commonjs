/*
 * Module pattern 'Highly configurable' mutable plugin boilerplate
 * Author: @markdalgleish
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

var util = require('./util/util');
var plug4 = require('./plug4');

var defaultOptions = {
  message: "plug5!"
};

var Plugin = function( elem, pluginOptions, extended ){
  var elem = elem;
  // Get data attribute options
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;
  // Merge all options
  var options = util.extend({}, defaultOptions, pluginOptions, dataOptions);

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
  publicApi = util.extend({}, plug4(elem, options, true), publicApi);

  if (!extended) {
    _update();
  }
  return publicApi;
}

module.exports = Plugin;