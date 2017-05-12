'use strict'
angular.module('batApp')
.controller('EditSkuController', function (getDataFactory, $state, shareDataService, $timeout) {
  var vm = this
  vm.dataId = ''
  vm.dropdownData = []

  getDataFactory.getBrandData().query().$promise
  .then((response) => {
    angular.forEach(response, (value, key) => {
      vm.dropdownData.push({ value :value.brand.brandname, id:value.brand.id })
    })
  })

  vm.editSku = function () {
    vm.dataId = shareDataService.getId()
    getDataFactory.getSkuById(vm.dataId).get().$promise
    .then((response) => {
      vm.sku = response.details.brand
      vm.sku.fromdate = new Date(response.details.brand.fromdate)
    })
  }

  vm.update = function (data) {
    getDataFactory.updateSku(vm.dataId).update(data).$promise
    .then((response) => {
      $state.go('menuTemplate.skuViewTable')
    })
  }

  vm.back = function () {
    $state.go('menuTemplate.skuViewTable')
  }

  vm.editSku()
})
