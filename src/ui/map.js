/*
 * Map module.
 * @module Map component
 */

'use strict';

var util = require('../util/extend');
var EventEmitter = require('../util/eventemitter');
var mapboxgl = require('mapbox-gl');
var geocoder = require('mapbox-gl-geocoder');
var Handlebars = require('handlebars');

// Precompiled via node-hbsfy transform
var mapTemplate = require('./map.hbs');

var defaultOptions = {
  template: mapTemplate // compiled template
};

var GLMap = function GLMap(elem, pluginOptions, extended) {
  this.elem = elem;
  this.extended = extended;
  this._map = null;
  this._geocoder = null;

  // Get data attribute options
  var dataOptions = elem.dataset.pluginOptions ? JSON.parse(elem.dataset.pluginOptions) : undefined;
  // Merge all options
  this.options = util.extend({}, defaultOptions, pluginOptions, dataOptions);

  this.render(this.options.template);
};

// Add parent objects
util.extend(GLMap.prototype, EventEmitter);
// Add Map functions on top
util.extend(GLMap.prototype, /** @lends Map.prototype */ {

  /*
   * Render the component
   * @param {function} compiled Handlebars template
   */
  render: function(template) {
    this.elem.innerHTML = template();
    this._createMap();
  },

  _createMap: function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW52ZW4iLCJhIjoiY2llcHYwMjk0MDAzYXdqa214eXo1MjY5ayJ9.NRXyS5w86DKA1ZZRgKpfEA';
    this._map = new mapboxgl.Map({
      'container': 'map', // container id
      'style': 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      'center': [-74.50, 40], // starting position
      'zoom': 9 // starting zoom
    });
    this._map.on('load', this._mapLoaded.bind(this));

    this._geocoder = new mapboxgl.Geocoder({
      'country': 'us',
      'types': 'country,region,postcode,locality,place,address'
    });

    this._map.addControl(this._geocoder);
  },

  _mapLoaded: function() {
    this.trigger('map.load');
  },
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
