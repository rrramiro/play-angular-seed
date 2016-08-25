define(['angular',
  './second-controller'
], function(angular, secondCtrl) {

  'use strict';

  /**
   * Second module.
   *
   * @return {angular.Module}
   */
  var module = angular.module('second', [
    'ui.router'
  ]);


  /**
   * Configuration function.
   *
   * Important! Do not call this function `my.second.config`. It would collide
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

    $stateProvider.state('second', {
      url: '/second',
      templateUrl: 'states/second/second.html',
      controller: 'SecondCtrl as second'
    });

  };


  /**
   * Init second module.
   */
  module
      .config(module.configuration)
      .controller('SecondCtrl', secondCtrl);
  return module;
});