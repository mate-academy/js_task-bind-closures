'use strict';

/**
 * Write a function (factory). It takes a callback as a first param and all
 * the other params after. It creates a function (device). The callback given
 * to the factory is called each time you call the device. It receives all the
 * params from factory (starting from second one) and all the params from the
 * device.
 *
 * For Example:
 *
 * const f = (...args) => { console.log(args) };
 * const device = bind(f, 1, 2, 3);
 * device(); // 1, 2, 3
 * device(4, 5, 6); // 1, 2, 3, 4, 5, 6
 *
 * @param {Function} callback
 *
 * @return {Function}
 */
function bind(callback) {
  const numArr = [...arguments];

  return function(...args) {
    if (args) {
      const arr = [...args];

      for (let i = 0; i < arr.length; i++) {
        numArr.push(arr[i]);
      }
      if (arr.length === 0) {
        numArr.shift();
      }

      return callback(...numArr);
    }
  };
}

module.exports = bind;
