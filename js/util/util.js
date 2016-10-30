'use strict';

exports.extend = function (dest) {
  for (var i = 1; i < arguments.length; i++) {
    var src = arguments[i];
      for (var k in src) {
        dest[k] = src[k];
      }
  }
  return dest;
};