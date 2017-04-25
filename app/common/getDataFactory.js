angular.module('batApp').factory('getDataFactory', (configuration, $resource) => ({
  getOutletViewData (url) {
    return $resource(configuration.apihost + url)
  }
}))
