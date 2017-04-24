'use strict'

angular.module('batApp')
.factory('Interceptor', function () {
  return {
    request: function (config) {
      return config
    }
  }
})
