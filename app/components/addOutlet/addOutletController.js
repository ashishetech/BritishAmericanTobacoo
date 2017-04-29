'use strict'
angular.module('batApp')
    .controller('addOutletController', function (getDataFactory, $state) {
      var vm = this
      vm.radioData = []
      getDataFactory.getMembershipType().query().$promise
              .then((response) => {
                angular.forEach(response, (value, key) => {
                  if (value.id === 1 || value.id === 2 || value.id === 3) {
                    vm.radioData.push({ label: value.type_name, value:value.id })
                  }
                })
              })
      vm.save = function (data) {
        console.log(data)
        getDataFactory.addOutlet().save(data).$promise
                .then((response) => {
                  console.log(response)
                  if (!response.error) {
                    $state.go('menuTemplate.outletViewTable')
                  }
                })
      }
    })
