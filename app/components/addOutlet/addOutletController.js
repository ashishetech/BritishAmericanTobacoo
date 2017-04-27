'use strict'
angular.module('batApp')
    .controller('addOutletController', function (getDataFactory) {
      var vm = this
      vm.radioData = [
          { label: 'Diamond', value:0 },
          { label: 'brogo123', value:1 },
          { label: 'bronze final', value:2 }
      ];
      vm.save=function(data){
        console.log(data);
        getDataFactory.addOutlet().save(data).$promise
                .then((response) => {
                  console.log(response)
                  if (!response.error) {

                    $state.go('outletViewTable')
                  }
                })

      }
    })
