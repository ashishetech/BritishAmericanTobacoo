'use strict'

angular.module('batApp').factory('getDataFactory', (configuration, $resource) => ({
  getOutletViewData () {
    return $resource(configuration.apihost + '/outlet/get/-1/1')
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
  getDataById (id) {
    return $resource(configuration.apihost + '/get/outletById/' + id)
  },
  updateOutlet (id) {
    return $resource(configuration.apihost + '/outlet/update/' + id, {}, { 'update': { method: 'PUT' } })
  },
  getTmeViewData () {
    return $resource(configuration.apihost + '/tme/get/-1/13')
  },
  assignTmeOutlet (dataId, tmeId) {
    return $resource(configuration.apihost + '/tme/assignoutlet/' + dataId + '/' + tmeId, {}, { 'update': { method: 'PUT' } })
  },
  getTmeById (id) {
    return $resource(configuration.apihost + '/tme/getById/' + id)
  },
  getTmeOutletById (id) {
    return $resource(configuration.apihost + '/tme/outlet/' + id)
  },
  unassignTme (id) {
    return $resource(configuration.apihost + '/tme/unassignoutlet/' + id, {}, { 'update': { method: 'PUT' } })
  },
  assignTme (search) {
    return $resource(configuration.apihost + '/tme/searchoutlet/' + search)
  },
  updateTme (id) {
    return $resource(configuration.apihost + '/tme/update/' + id, {}, { 'update': { method: 'PUT' } })
  },
  searchTme (search, text) {
    return $resource(configuration.apihost + '/tme/searchoutlet/' + search + '/' + text)
  },
  getMembershipViewData () {
    return $resource(configuration.apihost + '/membership/get')
  },
  addMembership () {
    return $resource(configuration.apihost + '/membership/create')
  },
  editMembership (id) {
    return $resource(configuration.apihost + '/membership/getById/' + id)
  },
  updateMembership (id) {
    return $resource(configuration.apihost + '/membership/update/' + id, {}, { 'update': { method: 'PUT' } })
  },
  addTme () {
    return $resource(configuration.apihost + '/tme/register')
  },
  getSkuViewData () {
    return $resource(configuration.apihost + '/get/sku/1/100')
  },
  getBrandViewData () {
    return $resource(configuration.apihost + '/get/brand/1/40')
  },
  addBrand () {
    return $resource(configuration.apihost + '/brand')
  },
  editBrand (id) {
    return $resource(configuration.apihost + '/get/brandById/' + id)
  },
  updateBrand (id) {
    return $resource(configuration.apihost + '/brand/update/' + id, {}, { 'update': { method: 'PUT' } })
  },
  getBrandData () {
    return $resource(configuration.apihost + '/get/brand/1/40')
  },
  addSku () {
    return $resource(configuration.apihost + '/sku')
  },
  getSkuById (id) {
    return $resource(configuration.apihost + '/get/skuById/' + id)
  },
  updateSku (id) {
    return $resource(configuration.apihost + '/sku/update/' + id, {}, { 'update': { method: 'PUT' } })
  }

}))
