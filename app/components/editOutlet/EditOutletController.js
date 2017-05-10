'use strict'
angular.module('batApp')
.controller('EditOutletController', function (getDataFactory, $state, shareDataService) {
  var vm = this
  vm.dataId = ''
  vm.outlet = {}
  vm.radioData = []
  vm.tme = []

  getDataFactory.getTmeViewData().query().$promise
  .then((response) => {
    vm.tme = response
  })

  getDataFactory.getMembershipType().query().$promise
  .then((response) => {
    angular.forEach(response, (value, key) => {
      if (value.id === 1 || value.id === 2 || value.id === 3) {
        vm.radioData.push({
          label: value.type_name,
          value: value.id
        })
      }
    })
    vm.radioData.reverse()
  })

  vm.updateTme = function (tmeId) {
    getDataFactory.assignTmeOutlet(vm.dataId, tmeId).update().$promise
    .then((response) => {
    })
  }

  vm.update = function (data) {
    vm.newdata = data
    getDataFactory.updateOutlet(vm.dataId).update(vm.newdata).$promise
    .then((response) => {
      if (!response.error) {
        $state.go('menuTemplate.outletViewTable')
      }
    })
  }
  vm.date = ''
  vm.datearray = []
  vm.editOutlet = function () {
    vm.dataId = shareDataService.getId()
    getDataFactory.getDataById(vm.dataId).get().$promise
    .then((response) => {
      if (!response.error) {
        vm.outlet.bat_id = response.bat_id
        vm.outlet.outlet_name = response.outlet_name
        vm.outlet.email = response.Outlet_Account.email
        vm.outlet.last_name = response.Outlet_Account.last_name
        vm.outlet.first_name = response.Outlet_Account.first_name
        vm.outlet.password = response.Outlet_Account.password
        vm.outlet.membership_number = response.Outlet_Account.membership_number
        vm.outlet.membership_id = response.Membership_Type.id
        vm.outlet.id = response.tme_id
        vm.outlet.birthday = new Date(response.Outlet_Account.birthday)
      }
    })
  }
  vm.editOutlet()
})
