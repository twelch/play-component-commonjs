'use strict';

var $ = jQuery = require('jquery');

exports.createPlugin = function(pluginName, Plugin) {
  $.fn[pluginName] = function(options) {            
    /** 
     * Start plugin for given element
     * @this DOM element 
     */
    function startPlugin() {
      // Keep plugin reference. Update options if already instantiated for this element
      var plugin = $.data(this, 'plugin_' + pluginName);

      if (plugin) {
        plugin.updateOptions(options);
      } else {
        plugin = new Plugin(this, options);                
      }
      $.data(this, 'plugin_' + pluginName, plugin);
      
      return plugin;
    }
    
    return this.each(startPlugin);
  };
};
