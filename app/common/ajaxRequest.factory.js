var app = angular.module('batApp')
app.factory('getDataFactory', function (configuration, $resource) {
  return {
    getApiData: function (url) {
      return $resource(configuration.apihost + url)
    }
  }
})
