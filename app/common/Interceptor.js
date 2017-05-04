angular.module('batApp')
.factory('Interceptor', function ($localStorage, $q) {
  return {
    request: function (config) {
      if ($localStorage.token) {
        config.url = config.url + '?accessToken=' + $localStorage.token
      }
      return config
    },
    responseError: function (response) {
      console.log(response)
      var status = response.status
      if (status === 403) {
        window.location = 'index.html'
        return
      }
// otherwise
      return $q.reject(response)
    }
  }
})
