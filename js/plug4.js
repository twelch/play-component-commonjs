/*
 * Plug4 base object
 */

'use strict';

var util = require('./util/util');

var defaultOptions = {
  message: "plug4!"
};

var Plugin = function( elem, pluginOptions, extended ){
  var elem = elem;
  // Get data attribute options
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;
  // Merge all options
  var options = util.extend({}, defaultOptions, pluginOptions, dataOptions);

  var publicApi = {
    updateOptions: updateOptions,
    getBase: getBase
  };

  function updateOptions(newOptions) {
    options = util.extend({}, options, newOptions);
    _update();
  }

  function getBase() {
    return options.message
  }

  function _update() {
    elem.innerHTML = options.message;
    console.log(options.message);
  }

  if (!extended) {
    _update();
  }
  return publicApi;
}

module.exports = Plugin;