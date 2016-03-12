'use strict';

angular.module('generatorMaterialAppApp.auth', [
  'generatorMaterialAppApp.constants',
  'generatorMaterialAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
