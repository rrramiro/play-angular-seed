define(['angular',
  './first-controller'
], function(angular, firstCtrl) {
  'use strict';

  /**
   * First module.
   *
   * @return {angular.Module}
   */
  var module = angular.module('first', [
    'ui.router'
  ]);


  /**
   * Configuration function.
   *
   * `templateUrl` path must be relative to `index.html`.
   *
   * @param {ui.router.$stateProvider} $stateProvider
   * @ngInject
   */
  module.configuration = function ($stateProvider) {

    $stateProvider.state('first', {
      url: '/first',
      templateUrl: 'states/first/first.html',
      controller: 'FirstCtrl as first'
    });

  };


  /**
   * Init first module.
   */
  module
      .config(my.first.module.configuration)
      .controller('FirstCtrl', firstCtrl);
  return module;
});