'use strict';

angular.module('generatorMaterialAppApp', [
  'generatorMaterialAppApp.auth',
  'generatorMaterialAppApp.admin',
  'generatorMaterialAppApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial',
  'angularMoment'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
