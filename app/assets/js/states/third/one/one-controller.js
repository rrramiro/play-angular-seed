define(['../third-controller'], function(thirdCtrl) {
  'use strict';

  /**
   * third.one controller.
   *
   * @param {angular.$controller} $controller
   * @constructor
   * @export
   * @ngInject
   */
  return function ($controller) {

    /**
     * @type {String}
     * @expose
     */
    this.label = 'some other label from third.one controller';

    /**
     * Inherit from parent controller. We'd like to call the `log`
     * function here.
     *
     * @type {Object}
     * @expose
     */
    this.parent = $controller(thirdCtrl);

    /**
     * Call parent `log` function.
     */
    this.parent.log('`log` function called from child controller');

  };
});