angular.module('batApp').controller('viewMembershipController', function (getDataFactory, $state, shareDataService) {
  var vm = this
  vm.membershipList = []
  vm.id = ''
  // vm.submitted = false
  vm.data = {
    tabletitle: 'Memberships',
    tableSubTitle: 'Memberships',
    values: ['ID',
      'Name',
      'Points Required',
      'Rebate Rate (1 Point)',
      'Order'

    ],
    alink: {
      Text1: 'ADD MEMBERSHIPS',
      Text:'Edit'
    }

  }
  vm.getMemberData = function () {
    getDataFactory.getMembershipViewData().query().$promise
     .then((response) => {
       if (response.error) {} else {
         angular.forEach(response, (value, key) => {
           vm.membershipList.push([value.id, value.type_name, value.rebate_rate, value.min_required_points, value.order])
         })
       }
     })
  }

  vm.edit = function (data) {
    vm.id = data
    getDataFactory.editMembership(vm.id).get().$promise
.then((response) => {
  console.log(response)
  vm.formdata = response
  angular.element('#myModal').modal('show')
})
  }

  vm.updateMember = function (updatedata) {
    getDataFactory.updateMembership(vm.id).update(updatedata).$promise
.then((response) => {
  if (!response.error) {
    vm.getMemberData()
    angular.element('#myModal').modal('hide')
  }
})
  }

  vm.add = function (data) {
    vm.submitted = false
    angular.element('#myModal').modal('show')
  }

  vm.cancel = function () {
    angular.element('#myModal').modal('hide')
    vm.formdata = {}
  }

  vm.getMemberData()
})
