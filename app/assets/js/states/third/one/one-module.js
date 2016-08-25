define(['angular', './one-controller'], function(angular, oneCtrl) {

  'use strict';

  /**
   * Module for third.one state.
   *
   * @return {angular.Module}
   */
  var module = angular.module('third.one', [
    'ui.router'
  ]);


  /**
   * Configuration function.
   *
   * Important! Do not call this function `config()`. It would collide
   * with the AngularJS `config()` function. The init part at the end of this file
   * would look like `my.blabla.config(my.blabla.config())` which obviously would
   * not work.
   *
   * `templateUrl` path must be relative to `index.html`.
   *
   * @param {ui.router.$stateProvider} $stateProvider
   * @ngInject
   */
  module.configuration = function ($stateProvider) {

    $stateProvider.state('third.one', {
      url: '/one',
      templateUrl: 'states/third/one/one.html',
      controller: 'ThirdOneCtrl as thirdOne'
    });

  };


  /**
   * Init third.one module.
   */
  module.config(module.configuration).controller('ThirdOneCtrl', oneCtrl);

  return module;
});