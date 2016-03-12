'use strict';

describe('Component: BookComponent', function () {

  // load the controller's module
  beforeEach(module('generatorMaterialAppApp'));

  var BookComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BookComponent = $componentController('BookComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
