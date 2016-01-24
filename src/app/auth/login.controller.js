
angular.module('app.auth')

.controller('LoginCtrl', ['$scope', 'LoginService', '$location', 
  function($scope, LoginService, $location) {

    $scope.user = {};
    $scope.busy = false;

    /* handle success login */
    var successLogin = function(response){
      //get user data, create a session and redirect to home
      LoginService.login(response.data.token, function(response){
        console.log(response);
        $scope.setCurrentUser(response.data);
        $scope.busy = false;
        $location.path('/');
      });
    }

    /* handle errors on login */
    var errorLogin = function(response){
      $scope.busy = false;
      $scope.errors = response.data.non_field_errors;
      console.log(response); 
    }

    /* fired when the user click to "Entrar" */
    $scope.login = function(){
      console.log($scope.user); 
      $scope.busy = true;
      LoginService.requestToken($scope.user, successLogin, errorLogin);
    }

}]);
