
angular.module('app.auth')

.service('LoginService', ['$http', 'CONFIG', 'Session', function($http, CONFIG, Session){
    var url = CONFIG.API_URL+'api-token-auth/';

    this.handleError = function(res){
      console.warn(res);
    };

    /*
     *api token request
     */
    this.requestToken = function(data, callback, error){
      return $http.post(url, data).then(callback, error);
    };

    /*
     *login, create a session
     */
    this.login = function(token, callback){
      var config = {
        method : 'GET',
        url    : CONFIG.API_URL+'users/me/',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
          'Authorization': 'Bearer ' + token 
        }
      };

      return $http(config).then(function(response){
        Session.create(token, response.data);
        callback(response) 
      }, this.handleError);
    };
}]);
