// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-datasource-juggler
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = DateString;

/**
 * A String whose value is a valid representation of a Date.
 * Use this type if you need to preserve the format of the value and still
 * check if it's valid.
 * @param {String} value
 * @constructor
 */
function DateString(value) {
  if (!(this instanceof DateString)) {
    return new DateString(value);
  }

  if (typeof(value) !== 'string') {
    throw new Error('Input must be a string');
  }
  // Preserve the reference for return via .toDate
  this.date = new Date(value);
  if (isNaN(this.date.getTime())) {
    throw new Error('Invalid date');
  }
  this.value = value;
};

/**
 * Return the equivalent Date object for this DateString.
 * @returns {Date} A JavaScript Date object
 */
DateString.prototype.toDate = function() {
  return this.date;
};
