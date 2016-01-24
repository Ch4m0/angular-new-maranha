angular.module('app.auth', [])

.service('Session', [function(){

  this.token = null;
  this.user = null;

  //create session from local storage
  this._createLc = function (token, user) {
    window.localStorage.setItem('token', angular.toJson(token));
    window.localStorage.setItem('user', angular.toJson(user));
  };

 //destroy session from local storage 
  this._destroyLc = function () {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  };

  //create session from memory 
  this.create = function (token, user) {
    this.token = token;
    this.user = user;
    this._createLc(token, user);
  };

  //destroy session from memory 
  this.destroy = function () {
    this.token = null;
    this.user = null;
    this._destroyLc();
  };

  //get token from memory or localStorage
  this.getToken = function(){
    var token = this.token;
    if(!token){
      token = angular.fromJson(window.localStorage.getItem('token'));  
    } 
    return token;
  };

  //get user from memory or localStorage
  this.getUser = function(){
    var user = this.user;
    if(!user){
      user = angular.fromJson(window.localStorage.getItem('user'));  
    } 
    return user;
  };

  this.isAuthenticated = function(){
    return (this.getToken() != null); 
  }
}]);
