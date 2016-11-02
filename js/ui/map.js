/*
 * Map module.
 * @module Map component
 */

'use strict';

var util = require('../util/extend');
var EventEmitter = require('../util/eventemitter');
var mapboxgl = require('mapbox-gl');

var defaultOptions = {
  'message': 'map!'
};

var GLMap = function GLMap(elem, pluginOptions, extended) {
  this.elem = elem;
  this.extended = extended;

  // Get data attribute options
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;
  // Merge all options
  this.options = util.extend({}, defaultOptions, pluginOptions, dataOptions);

  this._createMap();
};

// Add parent objects
util.extend(GLMap.prototype, EventEmitter);
// Add Map functions on top
util.extend(GLMap.prototype, /** @lends Map.prototype */ {

  'foo': function() {

  },

  '_createMap': function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW52ZW4iLCJhIjoiY2llcHYwMjk0MDAzYXdqa214eXo1MjY5ayJ9.NRXyS5w86DKA1ZZRgKpfEA';
    var map = new mapboxgl.Map({
      'container': 'map', // container id
      'style': 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      'center': [-74.50, 40], // starting position
      'zoom': 9 // starting zoom
    });
    map.on('load', this._mapLoaded.bind(this));
  },

  '_mapLoaded': function() {
    this.trigger('map.load');
  },

  /** Update the plugin 
   * @returns {void}
   */
  '_update': function() {
    
  }
});

module.exports = GLMap;

/**
 * Fired after map loaded and rendered
 *
 * @event map:load
 * @memberof Map
 * @instance
 * @type {Object}
 */
