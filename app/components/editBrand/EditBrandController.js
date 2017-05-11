'use strict'
angular.module('batApp')
.controller('EditBrandController', function (getDataFactory, shareDataService, $state) {
  var vm = this
  vm.brand = {}
  vm.dataId = ''

  vm.save = function (data) {
    getDataFactory.updateBrand(data.id).update(data).$promise
    .then((response) => {
      if (!response.error) {
        vm.brand = {}
        $state.go('menuTemplate.brandViewTable')
      } else {
        vm.errmsg = response.error.message
      }
    })
  }

  vm.back = function () {
    vm.brand = {}
    $state.go('menuTemplate.brandViewTable')
  }

  vm.change = function () {
    vm.errmsg = ''
  }

  vm.get = function () {
    vm.dataId = shareDataService.getId()
    getDataFactory.editBrand(vm.dataId).get().$promise
    .then((response) => {
      vm.brand = response.brand[0]
    })
  }
  vm.get()
})
