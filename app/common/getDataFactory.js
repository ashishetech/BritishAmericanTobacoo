'use strict'

angular.module('batApp').factory('getDataFactory', (configuration, $resource) => ({
  getOutletViewData () {
    return $resource(configuration.apihost + '/outlet/get/1/13')
  },
  login () {
    return $resource(configuration.apihost + '/admin/login')
  },
  addOutlet () {
    return $resource(configuration.apihost + '/outlet/create')
  },
  getMembershipType () {
    return $resource(configuration.apihost + '/membership/get')
  },
  getTmeViewData () {
    return $resource(configuration.apihost + '/tme/get/-1/1')
  },
  addTme () {
    return $resource(configuration.apihost + '/tme/register')
  },
  getSkuViewData () {
    return $resource(configuration.apihost + '/get/sku/1/10')
  },




}))
