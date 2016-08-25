define(['angular', './two-controller'], function(angular, twoCtrl) {
  'use strict';


  /**
   * Module for third.two state.
   *
   * @return {angular.Module}
   */
  var module = angular.module('third.two', [
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

    $stateProvider.state('third.two', {
      url: '/two',
      templateUrl: 'states/third/two/two.html',
      controller: 'ThirdTwoCtrl as thirdTwo'
    });

  };


  /**
   * Init third.two module.
   */
  module.config(module.configuration).controller('ThirdTwoCtrl', twoCtrl);
});