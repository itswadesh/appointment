'use strict';

angular.module('generatorMaterialAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('appointment', {
        url: '/appointment',
        template: '<appointment></appointment>'
      });
  });
