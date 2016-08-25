
describe('FirstCtrl', function() {
  var angular = requirejs('angular');
  var ctrl;

  beforeEach(angular.module('first'));

  beforeEach(angular.inject(function($injector) {

    var $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');

    ctrl = $controller('FirstCtrl', {
      $scope: $rootScope.$new()
    });
  }));

  it('should set the default value of "animals" model', function() {
    assert.equal(ctrl.animals, ['dog', 'cat', 'mouse']);
  });

});
