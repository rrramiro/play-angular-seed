

var jsdom = require("jsdom").jsdom;


describe('FirstCtrl', function() {
  var ctrl;

  beforeEach(function() {
      // https://github.com/tmpvar/jsdom#creating-a-browser-like-window-object
      global.document = jsdom('');
      global.window = document.parentWindow;

      var angular = requirejs('angular');

      requirejs('js/app');

      angular.module('first');

      angular.inject(function($injector) {

          var $rootScope = $injector.get('$rootScope');
          var $controller = $injector.get('$controller');

          ctrl = $controller('FirstCtrl', {
              $scope: $rootScope.$new()
          });
      });
  });

  afterEach(function() {
      delete global.window;
      delete global.document;
  });



  it('should set the default value of "animals" model', function() {
    assert.equal(ctrl.animals, ['dog', 'cat', 'mouse']);
  });

});
