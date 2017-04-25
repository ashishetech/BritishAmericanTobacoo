angular.module('batApp')
 .factory('Interceptor', function ($localStorage) {
   return {
     request: function (config) {
       config.url = config.url + '?accessToken=' + $localStorage.token
       return config
     }
   }
 })
