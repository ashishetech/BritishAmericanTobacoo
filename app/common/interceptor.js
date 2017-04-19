var app = angular.module('invisionApp')
app.factory('Interceptor', function () {
  return {
    request: function (config) {
      config.url = config.url
      return config
    }
  }
})
