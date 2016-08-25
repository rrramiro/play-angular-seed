define([], function() {
  'use strict';

  /**
   * Convert boolean values to unicode checkmark or cross.
   *
   * @constructor
   */
  my.check.Filter = function () {
    this.checkmark = '\u2714';
    this.cross = '\u2718';
    this.convert = this.convert.bind(this);
  };



  /**
   * Convert truthy and falsy values to unicode symbols.
   *
   * @param {string} input
   * @return {string} Converted value
   */
  my.check.Filter.prototype.convert = function (input) {
    return input ? this.checkmark : this.cross;
  };

  /**
   * Version directive factory.
   *
   * @return {function}
   */
  return function () {
    var filter = new my.check.Filter();
    return filter.convert;
  };
});