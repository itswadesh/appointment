'use strict';

angular.module('generatorMaterialAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book',
        template: '<book></book>'
      });
  });
