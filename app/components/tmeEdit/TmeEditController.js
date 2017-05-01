'use strict'
angular.module('batApp')
    .controller('TmeEditController', function(getDataFactory, $state, shareDataService) {
        var vm = this
        vm.dataId = '';
        vm.tme = {};
		vm.outlets=[];
		vm.assignData=[];
		vm.assignId='ALL';

		vm.getTmeOutlet=function () {
		vm.dataId = shareDataService.getId()
        getDataFactory.getTmeOutletById(vm.dataId ).get().$promise
            .then((response) => {
				vm.outlets=response.data;
            });
		}
		vm.unassign=function (id) {
			console.log(id)
			getDataFactory.unassignTme(id).update().$promise
                .then((response) => {
					console.log('basdasdbas',response);
					vm.getTme();

                })
		}

        vm.update = function(data) {
			console.log(data);
            getDataFactory.updateTme(vm.dataId).update(data).$promise
                .then((response) => {
					console.log(response);
                    if (!response.error) {
                        $state.go('menuTemplate.tme')
                    }
                })
        }

        vm.editTme = function() {
            vm.dataId = shareDataService.getId()
            getDataFactory.getTmeById(vm.dataId).get().$promise
                .then((response) => {
                    if (!response.error) {
                        vm.tme.bat_id = response.bat_id;
                        vm.tme.email = response.email
                        vm.tme.last_name = response.last_name
                        vm.tme.first_name = response.first_name
                        vm.tme.password = response.password
                        vm.tme.mobile_no = response.mobile_no
						vm.tme.id=response.id;
                    }
                });
        }

		vm.assign=function (search) {
			console.log(search)
			getDataFactory.assignTme(search).query().$promise
                .then((response) => {
					console.log('basdasdbas',response);
					vm.assignData=response;
                })
		}
		vm.showTme=function (search) {
			console.log(search)
			vm.assign(search);
		}

        vm.editTme();
		vm.getTmeOutlet();
    })
