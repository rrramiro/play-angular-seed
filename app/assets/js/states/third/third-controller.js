define([], function() {

  'use strict';


  /**
   * Third controller.
   *
   * @constructor
   * @export
   */
  my.third.Ctrl = function () {

    /**
     * @type {String}
     * @expose
     */
    this.label = 'some label from third controller';

  };


  /**
   * Write `text` to stdout.
   *
   * Example function that we'd like to access in our `third.one`
   * child controller.
   *
   * @param {String} text
   */
  my.third.Ctrl.prototype.log = function (text) {
    console.log(text);
  };

  return my.third.Ctrl;
});