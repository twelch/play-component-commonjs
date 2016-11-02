'use strict';

/**
 * Extend a destination object with all properties of the src object,
 * using defineProperty instead of simple assignment.
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 * @private
 */
exports.extendAll = function(dest, src) {
  for (var i in src) {
    Object.defineProperty(dest, i, Object.getOwnPropertyDescriptor(src, i));
  }
    
  return dest;
};

/**
 * Extend a parent's prototype with all properties in a properties
 * object.
 *
 * @param {Object} parent
 * @param {Object} props
 * @returns {Object}
 * @private
 */
exports.inherit = function(parent, props) {
  var parentProto = typeof parent === 'function' ? parent.prototype : parent,
    proto = Object.create(parentProto);
  exports.extendAll(proto, props);
    
  return proto;
};
