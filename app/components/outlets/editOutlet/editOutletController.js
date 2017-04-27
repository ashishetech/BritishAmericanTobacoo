'use strict'
angular.module('batApp')
    .controller('editOutletController', function(getDataFactory, $state, shareDataService) {
        var vm = this
        vm.radioData = [{
            label: 'gold23',
            value: 1
        }, {
            label: 'gold123',
            value: 2
        }, {
            label: 'Diamonds',
            value: 3
        }]

        vm.update = function(data) {
            console.log('sjkd', data)
            // getDataFactory.updateOutlet().put(data).$promise
            //     .then((response) => {
            //         if (!response.error) {
            //             $state.go('menuTemplate.outletViewTable')
            //         }
            //     })
        }
// vm.data='';
		vm.get=function () {
			vm.data =shareDataService.getId()
				console.log(vm.data)
			getDataFactory.getDataById(vm.data).get().$promise
                .then((response) => {
                    if (!response.error) {
						vm.outlet=response;
						console.log(response);
                        // $state.go('menuTemplate.outletViewTable')
                    }
                })
		}
		vm.get();
    })
