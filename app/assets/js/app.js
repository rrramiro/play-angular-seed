define(['angular',
  './components/directives/version-directive',
  './components/filters/check-filter',
  './components/services/version-service',
  './states/first/first-module',
  './states/second/second-module',
  './states/third/third-module'], function(angular) {
  'use strict';

  /**
   * Configuration function.
   *
   * @param {ui.router.$stateProvider} $stateProvider
   * @param {ui.router.$urlRouterProvider} $urlRouterProvider
   * @ngInject
   */
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/first');

  }

  /**
   * Main app.
   */
  return angular.module('app', [
    'ui.router',
    my.first.module.name,
    my.second.module.name,
    // my.third.module includes child states `third.one` and `third.two`
    my.third.module.name
  ])
  .config(config)
  .directive('version', my.version.Directive.factory)
  .service('version', my.version.Service)
  .filter('check', my.check.Filter.factory);



});
