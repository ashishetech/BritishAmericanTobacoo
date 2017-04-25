angular.module('batApp')
 .factory('Interceptor', function ($localStorage) {
   return {
     request: function (config) {
       if ($localStorage.token) {
         config.url = config.url + '?accessToken=' + $localStorage.token
       }
       return config
     }
   }
 })
