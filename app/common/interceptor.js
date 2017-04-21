var app = angular.module('batApp')
app.factory('Interceptor', function () {
  return {
    request: function (config) {
      config.url = config.url + '?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6NywiaWF0IjoxNDkyNzY2OTI0LCJleHAiOjE0OTI3NzA1MjR9.F1q8TyhafOY5t76C-7XbBhQoRnhKEe24JwR9UKDnxXA'
      return config
    }
  }
})
