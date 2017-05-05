'use strict'
angular.module('batApp')
    .controller('addSkuController', function (getDataFactory, $state) {
      var vm = this
      vm.dropdownData = []

      getDataFactory.getBrandData().query().$promise
      .then((response) => {
        angular.forEach(response, (value, key) => {
          vm.dropdownData.push({ value :value.brand.brandname, id:value.brand.id })
        })
      })
      vm.save = function (data) {
        var fromdate = moment(data.date).format('YYYY-MM-DD')
        fromdate = fromdate + ' ' + data.time
        data.fromdate = fromdate

        getDataFactory.addSku().save(data).$promise
        .then((response) => {
          $state.go('menuTemplate.skuViewTable')

          console.log(response)
        })
      }
      vm.cancel = function () {
        $state.go('menuTemplate.skuViewTable')
      }
    })
