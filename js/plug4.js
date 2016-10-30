/*
 * 'Highly configurable' mutable plugin boilerplate
 * Author: @markdalgleish
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

var $ = jQuery = require('jquery');
var util = require('./util/util');

var pluginName = 'plug4';
var defaultOptions = {
  message: "plug4!",
  extended: false       // Is this plugin being extended by another?
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

  return publicApi;
}

module.exports = Plugin;

$.fn[pluginName] = function(options) {
  return this.each(function() {
    // Keep plugin reference. Update options if already instantiated for this element
    var plugin = $.data(this, "plugin_" + pluginName);
    if (!plugin) {
      plugin = new Plugin(this, options)        
    } else {
      plugin.updateOptions(options);
    }
    $.data(this, "plugin_" + pluginName, plugin);
    return plugin
  });
};