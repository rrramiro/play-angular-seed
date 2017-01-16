// 'use strict';
//
// describe('version directive', function() {
//
//   beforeEach(angular.module('app'));
//
//   it('should print current version', function() {
//
//     angular.module(function($provide) {
//       $provide.value('version', {
//         get: function() {
//           return 'TEST_VER';
//         }
//       });
//     });
//
//     angular.inject(function($compile, $rootScope) {
//       var element = $compile('<span version></span>')($rootScope);
//       expect(element.text()).toEqual('TEST_VER');
//     });
//
//   });
//
// });
