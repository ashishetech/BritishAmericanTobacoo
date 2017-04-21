var app = angular.module('batApp')
app.factory('Interceptor', function () {
  return {
    request: function (config) {
      config.url = config.url + '?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6NywiaWF0IjoxNDkyNzU3ODY3LCJleHAiOjE0OTI3NjE0Njd9.0rvDQSolKHmYYhQYj_x_1ggaN-OeDjMUVVyFdAd-xzk'
      return config
    }
  }
})
