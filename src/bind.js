'use strict';

function bind(callback, ...params) {
  return (...newParams) => callback(...params, ...newParams);
}

module.exports = bind;
