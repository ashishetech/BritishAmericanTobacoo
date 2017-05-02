'use strict'
angular.module('batApp')
    .controller('TmeEditController', function(getDataFactory, $state, shareDataService, $timeout) {
        var vm = this
        vm.dataId = ''
        vm.tme = {}
        vm.outlets = []
        vm.assignData = []
        vm.assignId = 'ALL'
        vm.checkboxId = []

        vm.getTmeOutlet = function() {
            vm.dataId = shareDataService.getId()
            getDataFactory.getTmeOutletById(vm.dataId).get().$promise
                .then((response) => {
                    vm.outlets = response.data
                    console.log(vm.outlets)
                })
        }

        vm.unassign = function(id) {
            getDataFactory.unassignTme(id).update().$promise
                .then((response) => {
                    vm.getTmeOutlet()
                })
        }

        vm.update = function(data) {
            getDataFactory.updateTme(vm.dataId).update(data).$promise
                .then((response) => {
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
                        vm.tme.bat_id = response.bat_id
                        vm.tme.email = response.email
                        vm.tme.last_name = response.last_name
                        vm.tme.first_name = response.first_name
                        vm.tme.password = response.password
                        vm.tme.mobile_no = response.mobile_no
                        vm.tme.id = response.id
                    }
                })
        }

        vm.assign = function(radioValue) {
            angular.element('#assignTme').modal('show')
            getDataFactory.assignTme(radioValue).query().$promise
                .then((response) => {
                    vm.assignData = response
                    for (var i = 0; i < vm.assignData.length; i++) {
                        if (vm.assignData[i].tme_id === null) {
                            vm.assignData[i].status = 'Un-assigned'
                        } else {
                            vm.assignData[i].status = 'assigned'
                        }
                    }
                    console.log(vm.assignData)
                })
        }

        vm.showTme = function(radioValue) {
            vm.assign(radioValue)
        }

        vm.search = function(text) {
            if (vm.assignId == 'ALL') {
                getDataFactory.searchTme(vm.assignId, text).query().$promise
                    .then((response) => {
                        vm.assignData = response
                        for (var i = 0; i < vm.assignData.length; i++) {
                            if (vm.assignData[i].tme_id === null) {
                                vm.assignData[i].status = 'Un-assigned'
                            } else {
                                vm.assignData[i].status = 'assigned'
                            }
                        }
                        console.log(vm.assignData)
                    })
            } else {
                getDataFactory.searchTme('UNASSIGN', text).query().$promise
                    .then((response) => {
                        vm.assignData = response
                        for (var i = 0; i < vm.assignData.length; i++) {
                            if (vm.assignData[i].tme_id === null) {
                                vm.assignData[i].status = 'Un-assigned'
                            } else {
                                vm.assignData[i].status = 'assigned'
                            }
                        }
                        console.log(vm.assignData)
                    })
            }
        }

        vm.checkboxValue = function(boolean, idnew) {
            if (boolean == true) {
                vm.checkboxId.push(idnew)
            } else {
                vm.checkboxId.splice(vm.checkboxId.indexOf(idnew), 1)
            }
        }

        vm.apply = function() {
            getDataFactory.assignTmeOutlet(vm.checkboxId, vm.dataId).update().$promise
                .then((response) => {
                    if (!response.error) {
                        vm.checkboxId = []
                        $timeout(function() {
                            angular.element('#assignTme').modal('hide')
                        }, 1000)
                        vm.getTmeOutlet()
                    }
                })
        }
        vm.cancel = function() {
            vm.checkboxId = []
            angular.element('#assignTme').modal('hide')
        }

        vm.editTme()
        vm.getTmeOutlet()
    })
