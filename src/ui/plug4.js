/*
 * Plug4 module.
 * @module Plug4 component
 */

'use strict';

var util = require('../util/extend');

var defaultOptions = {
  'message': 'plug4!'
};

var Plug4 = function(elem, pluginOptions, extended) {
  var elem = elem;
  // Get data attribute options
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;
  // Merge all options
  var options = util.extend({}, defaultOptions, pluginOptions, dataOptions);

  var publicApi = {
    'updateOptions': updateOptions,
    'getBase': getBase
  };

  /** Update component options
   * @param {object} newOptions The updated options
   * @returns {void}
   */
  function updateOptions(newOptions) {
    options = util.extend({}, options, newOptions);
    _update();
  }

  /** Returns base message
   * @returns {string} Message
   */
  function getBase() {
    return options.message;
  }

  /** Updates the component
   * @returns {void}
   */
  function _update() {
    elem.innerHTML = options.message;
    console.log(options.message);
  }

  if (!extended) {
    _update();
  }
  
  return publicApi;
};

module.exports = Plug4;
