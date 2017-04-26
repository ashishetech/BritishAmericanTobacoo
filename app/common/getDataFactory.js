'use strict'

angular.module('batApp').factory('getDataFactory', (configuration, $resource) => ({
  getOutletViewData () {
    return $resource(configuration.apihost + '/outlet/get/-1/1')
  },
  login () {
    return $resource(configuration.apihost + '/admin/login')
  }
}))
