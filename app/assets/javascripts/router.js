'use strict';

(function() {
  var app = angular.module('advertechRouter', ['ui.router']);
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'mainController'
    });
  });
})();

