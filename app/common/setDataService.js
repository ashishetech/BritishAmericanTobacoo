'use strict'

angular.module('batApp').factory('setDataService', (getDataFactory, $q) => ({

  setSkuControllerData () {
    var deferred = $q.defer()

    var skuList = []

    getDataFactory.getSkuViewData().query().$promise
       .then((response) => {
         if (!response.error) {
           angular.forEach(response, (value, key) => {
             value.sku.createdAt = moment(value.sku.createdAt).format('DD MMMM, YYYY')

             skuList.push([value.sku.id, value.sku.productname, value.sku.brand_id, value.sku.createdAt, value.sku.bat_id, value.sku.basepoint])
           })
           deferred.resolve(skuList)
         }
       })
    return deferred.promise
},
  setOutletControllerData () {
    var deferred = $q.defer()
    var outletList = []
    getDataFactory.getOutletViewData().query().$promise
           .then((response) => {
             if (response.error) {} else {
               angular.forEach(response, (value, key) => {
                 value.data.updatedAt = moment(value.data.updatedAt).format('DD MMMM, YYYY')
                 if (value.tme == null) {
                   value.tme = 'none'
                 } else if (value.tme.first_name) {
                   value.tme = value.tme.first_name
                 }
                 outletList.push([value.data.id, value.data.bat_id, value.data.outlet_name, value.data.points_value, value.data.updatedAt, value.data.performance, value.tme])
               })
               deferred.resolve(outletList)
             }
           })
    return deferred.promise
  }

}))
