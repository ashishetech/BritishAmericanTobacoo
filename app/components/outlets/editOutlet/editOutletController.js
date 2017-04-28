'use strict'
angular.module('batApp')
    .controller('editOutletController', function(getDataFactory, $state, shareDataService) {
        var vm = this
		vm.dataId='';
		vm.outlet={} ;
        vm.radioData = []
		vm.radioData12=[]
		vm.tme = [];
		vm.cars = [
	        { model : "Ford Mustang", color : "red" },
	        { model : "Fiat 500", color : "white" },
	        { model : "Volvo XC90", color : "black" }
	    ];
		vm.selectedCar=""
		// getDataFactory.tmeAssign().query().$promise
		// .then((response) => {
		// 	console.log(">>>>>>>>>>>>>>>>>>tme",response)
		// 	vm.tme=response
		// 	// console.log('tme',vm.tme)
		// })
		getDataFactory.tmeAssign().query().$promise
		              .then((response) => {
						  console.log(">TME>>>>>>>>>>>>>>>>>>>>.",response)
		                 angular.forEach(response, (value, key) => {
							 console.log(">>>>>>>>>>>>>>>>>.value is",value)

		                    vm.radioData12.push({ label: value.first_name, value:value.id })

		                })
		              })
		getDataFactory.getMembershipType().query().$promise
			  .then((response) => {
				angular.forEach(response, (value, key) => {
				  if (value.id === 1 || value.id === 2 || value.id === 3) {
					vm.radioData.push({ label: value.type_name, value:value.id })
				  }
				})
			  })



        vm.update = function(data) {
            console.log('sjkd', data)
			console.log('sjkd', vm.dataId)
            getDataFactory.updateOutlet(vm.dataId).editoutLate(data).$promise
                .then((response) => {
                    if (!response.error) {
                        $state.go('menuTemplate.outletViewTable')
                    }
                })
        }

		vm.get=function () {
			vm.dataId =shareDataService.getId()
				console.log(vm.dataId)
			getDataFactory.getDataById(vm.dataId).get().$promise
                .then((response) => {

                    if (!response.error) {
						// vm.outlet=response.Outlet_Account;
						vm.outlet.bat_id=response.bat_id;
						vm.outlet.outlet_name=response.outlet_name;
						vm.outlet.birthday=response.Outlet_Account.birthday
						vm.outlet.email=response.Outlet_Account.email
						vm.outlet.last_name=response.Outlet_Account.last_name
						vm.outlet.first_name=response.Outlet_Account.first_name
						vm.outlet.password=response.Outlet_Account.password
						vm.outlet.membership_number=response.Outlet_Account.membership_number
						vm.outlet.membership_id=response.Membership_Type.id
						vm.outlet.tme_id=response.id

						// vm.outlet.Membership_Type.id=response.Membership_Type.id;
							console.log(response);
						console.log(vm.outlet);

                    }
                });


		}
		vm.get();
    })
