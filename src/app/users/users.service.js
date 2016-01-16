
angular.module('app.users', [])

.service('UsersService', ['$http', 'CONFIG', function($http,  CONFIG){
    var url = CONFIG.url+'hotels/';

    this.handleError = function(res){
      console.warn(res);
    };

    this.get = function(callback, error, noblock){
      return $http.get(url).then(callback, error);
    };
}]);
