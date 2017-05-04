angular.module('batApp')
.controller('AddMembershipController', function ($localStorage, $state, getDataFactory, $timeout) {
  var vm = this
  vm.submitted = false

  vm.submit = function (data) {
    getDataFactory.addMembership().save(data).$promise
.then((response) => {
  if (!response.error) {
    angular.element('#myModal').modal('hide')
    vm.data = { type_name:null, min_required_points:null, order:null, rebate_rate:null }
    vm.submitted = false
  } else {
    vm.error = response.error.message
  }
})
  }
})
