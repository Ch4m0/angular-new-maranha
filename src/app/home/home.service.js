
angular.module('app.home', [])

.service('HomeService', ['$http', 'CONFIG', function($http,  CONFIG){
    var url = CONFIG.API_URL+'home/';

    this.handleError = function(res){
      console.warn(res);
    };

    this.get = function(callback, error, noblock){
      return $http.get(url).then(callback, error);
    };
}]);
