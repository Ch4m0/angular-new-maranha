
/*
 * url routes
 */

  angular.module('app') 
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
    .when("/", {
      controller: "HomeCtrl",
      templateUrl: "app/home/home.html"
    })
    .when("/users", {
      controller: "UsersCtrl",
      templateUrl: "app/users/users.html"
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }]);

