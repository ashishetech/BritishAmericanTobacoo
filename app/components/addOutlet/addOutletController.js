'use strict'
angular.module('batApp')
    .controller('addOutletController', function (getDataFactory, $state) {
      var vm = this
      vm.radioData = [
          { label: 'gold23', value:1 },
          { label: 'gold123', value:2 },
          { label: 'Diamonds', value:3 }
      ]
      vm.save = function (data) {
        getDataFactory.addOutlet().save(data).$promise
                .then((response) => {
                  if (!response.error) {
                    $state.go('menuTemplate.outletViewTable')
                  }
                })
      }
    })
