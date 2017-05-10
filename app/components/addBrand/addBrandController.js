'use strict'
angular.module('batApp')
    .controller('addBrandController', function (getDataFactory, $state) {
      var vm = this
      vm.save = function (data) {
        getDataFactory.addBrand().save(data).$promise
        .then((response) => {
          if (!response.error) {
            $state.go('menuTemplate.brandViewTable')
          } else {
            vm.errmsg = response.error.message
          }
        })
      }
      vm.back = function () {
        $state.go('menuTemplate.skuViewTable')
      }
      vm.change = function () {
        vm.errmsg = ''
      }
    })
