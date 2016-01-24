
/*
 * url routes
 */

  angular.module('app') 
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
    .when("/login", {
      controller: "LoginCtrl",
      templateUrl: "app/auth/login.html"
    })
    .when("/", {
      controller: "HomeCtrl",
      templateUrl: "app/home/home.html"
    })
    .when("/usuarios", {
      controller: "UsersCtrl",
      templateUrl: "app/users/users.html"
    })
    .when("/usuarios/:id", {
      controller: "UserDetailCtrl",
      templateUrl: "app/users/users-detail.html"
    })
    .when("/perfil", {
      controller: "ProfileCtrl",
      templateUrl: "app/users/profile.html"
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }]);

