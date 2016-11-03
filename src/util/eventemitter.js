/*
 * EventEmitter mixin.  Uses jQuery event system.  Expects that
 * the parent object has a property called elemset to the DOM element to 
 * @module EventEmitter component
 * @example 
 * var MyComponent = function(elem, options) {
 *   this.elem = elem
 *   this.options = options
 * }
 * util.extend(MyComponent.prototype, EventEmitter);
 *
 * var comp = new MyComponent(document.getElementById('map'));
 */

'use strict';

var EventEmitter = {
  '_JQInit': function() {
    this._JQ = jQuery(this.elem);
  },
  'trigger': function(evt, data) {
    !this._JQ && this._JQInit();
    this._JQ.trigger(evt, data);
  },
  'one': function(evt, handler) {
    !this._JQ && this._JQInit();
    this._JQ.one(evt, handler);
  },
  'on': function(evt, handler) {
    !this._JQ && this._JQInit();
    this._JQ.on(evt, handler);
  },
  'off': function(evt, handler) {
    !this._JQ && this._JQInit();
    this._JQ.off(evt, handler);
  }
};

module.exports = EventEmitter;
