var app = angular.module('invisionApp')
app.factory('getDataFactory', function (configuration, $resource) {
  return {
    getData: function (url) {
      return $resource(configuration.apihost + url)
    }
  }
})
