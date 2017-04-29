'use strict'

angular.module('batApp').factory('getDataFactory', (configuration, $resource) => ({
  getOutletViewData () {
    return $resource(configuration.apihost + '/outlet/get/-1/1')
  },
  login () {
    return $resource(configuration.apihost + '/admin/login')
  },
  getDataById (id) {
    return $resource(configuration.apihost + '/get/outletById/' + id)
  },
  updateOutlet (id) {
    return $resource(configuration.apihost + '/outlet/update/' + id, {}, { 'update': { method:'PUT' } })
  },
  getMembershipType () {
    return $resource(configuration.apihost + '/membership/get')
  },
  tmeAssign () {
    return $resource(configuration.apihost + '/tme/get/-1/13')
  },
  updateTme (tmeId,dataId) {
	  return $resource(configuration.apihost + '/tme/assignoutlet/' + dataId +'/'+ tmeId, {}, { 'update': { method:'PUT' } })
  }
}))
