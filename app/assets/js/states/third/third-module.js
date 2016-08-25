define(['angular',
  './one/one-module',
  './two/two-module',
  './third-controller'
], function(angular, oneModule, towModule, thirdController) {
  'use strict';

  /**
   * Third module.
   *
   * Require child states `third.one` and `third.two` here
   * to reduce noise in `app.js`.
   *
   * @return {angular.Module}
   */
  var module = angular.module('third', [
    'ui.router',
    oneModule.name,
    towModule.name
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

    $stateProvider.state('third', {
      url: '/third',
      templateUrl: 'states/third/third.html',
      controller: 'ThirdCtrl as third'
    });

  };


  /**
   * Init third module.
   */
  module.config(module.configuration).controller('ThirdCtrl', thirdController);

  return module;

});