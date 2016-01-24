angular.module('app')
.run(['$rootScope', 'AUTH_EVENTS', 'Session', '$location', 'editableOptions', 'editableThemes', 
  function ($rootScope, AUTH_EVENTS, Session, $location, editableOptions, editableThemes) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    editableThemes['bs3'].submitTpl = '<button class="btn btn-flat btn-primary" type="submit">'+
                                       '<i class="fa fa-check"></i></button>';

    editableThemes['bs3'].cancelTpl = '<button class="btn btn-flat btn-default" ng-click="$form.$cancel()">'+
                                       '<i class="fa fa-times"></i></button>';
    function logout(){
      Session.destroy();
      $location.path('/login');
    }

    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function(){
      logout();
      console.info('se activo interceptor not authenticated');
    });

    $rootScope.$on(AUTH_EVENTS.notAuthorized, function(){
      logout();
      console.info('se activo interceptor not authorized');
    });

    $rootScope.$on(AUTH_EVENTS.logout, function(){
      logout();
      console.info('se cerrara la sesion');
    });

    $rootScope.$on('$routeChangeStart', function (event, next) {
      if ($location.path() !== '/login'){
        if(!Session.isAuthenticated()){
          logout(); 
        } 
      }
    });

    $rootScope.goTo = function(url){
      $location.path(url); 
    };

}]);
