'use strict';

describe('Component: AppointmentComponent', function () {

  // load the controller's module
  beforeEach(module('generatorMaterialAppApp'));

  var AppointmentComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AppointmentComponent = $componentController('AppointmentComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
