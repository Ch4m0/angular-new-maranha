angular.module('app.home')

.controller('MainCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'Session',
  function($scope, $rootScope, AUTH_EVENTS, Session) {
    console.warn('main ctrl');

    $scope.user = null;
    $scope.expandedMenu = true;


    $scope.setCurrentUser = function(user){
      $scope.user = user; 
    };

    $scope.logout = function(user){
      $rootScope.$broadcast(AUTH_EVENTS.logout);
    };

    $scope.toogleMenu = function(){
      $scope.expandedMenu = !$scope.expandedMenu;

      if ($scope.expandedMenu){
        $.AdminLTE.pushMenu.expand()
      } else {
        $.AdminLTE.pushMenu.collapse();
      }
    }

    //init
    $scope.setCurrentUser(Session.getUser());
}]);
