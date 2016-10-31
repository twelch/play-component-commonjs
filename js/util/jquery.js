'use strict';

var $ = jQuery = require('jquery');

exports.createPlugin = function(pluginName, Plugin) {
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      // Keep plugin reference. Update options if already instantiated for this element
      var plugin = $.data(this, 'plugin_' + pluginName);

      if (plugin) {
        plugin.updateOptions(options);
      } else {
        plugin = new Plugin(this, options);                
      }
      $.data(this, 'plugin_' + pluginName, plugin);
      
      return plugin;
    });
  };
};
