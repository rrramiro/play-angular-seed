define([], function() {
  'use strict';

  /**
   * A directive that displays the current version.
   *
   * @param {angular.Service} version
   * @constructor
   */
  my.version.Directive = function (version) {
    this.version = version;
    this.link = this.link.bind(this);
    /** @type {angular.Scope} */
    this.scope;
    /** @type {angular.JQLite} */
    this.elem;
    /** @type {angular.Attributes} */
    this.attrs;
  };

  /**
   * Linking function.
   *
   * @param {angular.Scope} scope
   * @param {angular.JQLite} elem
   * @param {angular.Attributes} attrs
   */
  my.version.Directive.prototype.link = function (scope, elem, attrs) {

    this.scope = scope;
    this.elem = elem;
    this.attrs = attrs;

    this.elem.text(this.version.get());

  };

  /**
   * Version directive factory.
   *
   * @param {angular.Service} version
   * @return {Object}
   * @ngInject
   */
  return function (version) {
    var dir = new my.version.Directive(version);
    return {
      link: dir.link
    };
  };
});