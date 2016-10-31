/*
 * Plug5 module.
 * @module Plug5 component
 */

'use strict';

var util = require('./util/util');
var plug4 = require('./plug4');

var defaultOptions = {
  'message': 'plug5!'
};

var Plug5 = function(elem, pluginOptions, extended) {
  var elem = elem;
  // Get data attribute options
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;
  // Merge all options
  var options = util.extend({}, defaultOptions, pluginOptions, dataOptions);

  var publicApi = {};

  /** Update the plugin 
   * @returns {void}
   */
  function _update() {
    elem.innerHTML = options.message + 'extends ' + publicApi.getBase();
    console.log(options.message);
  }

  // Extend plug4 object
  publicApi = util.extend({}, plug4(elem, options, true), publicApi);

  if (!extended) {
    _update();
  }
  
  return publicApi;
};

module.exports = Plug5;
