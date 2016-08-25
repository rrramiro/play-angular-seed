require(['angular'], function (angular) {

  describe('check filter', function() {

    beforeEach(function(){
      angular.module('app');
    });

    it('should convert boolean values', function(){
      inject(function(checkFilter) {
        expect(checkFilter(true)).toBe('\u2714');
        expect(checkFilter(false)).toBe('\u2718');
      });
    });

  });
});