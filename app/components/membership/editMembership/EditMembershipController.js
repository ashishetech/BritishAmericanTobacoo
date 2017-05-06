angular.module('batApp')
.controller('EditMembershipController', function ($localStorage, $state, getDataFactory, shareDataService, $timeout) {
  var vm = this

  vm.editMembership = function () {
    vm.id = shareDataService.getId()
    console.log(vm.id)
    getDataFactory.editMembership(vm.id).get().$promise
.then((response) => {
  vm.data = response
  console.log(vm.data)
})
  }

  vm.submit = function (data) {
    getDataFactory.updateMembership(vm.id).update(data).$promise
.then((response) => {
  if (!response.error) {
    angular.element('#myModal').modal('hide')
  } else {
    vm.data.error = response.error.message
  }
})
  }
  vm.editMembership()
})
