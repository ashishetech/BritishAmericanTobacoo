angular.module('batApp').controller('viewMembershipController', function (getDataFactory, $state, shareDataService) {
  var vm = this
  vm.membershipList = []
  vm.id = ''
  vm.alert = false
  vm.newValue = []
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
    vm.membershipList = []
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
      vm.formdata = response
      angular.element('#editModal').modal('show')
    })
  }

  vm.updateMember = function (updatedata) {
    getDataFactory.updateMembership(vm.id).update(updatedata).$promise
    .then((response) => {
      if (!response.error) {
        angular.element('#editModal').modal('hide')
        vm.getMemberData()
      }
    })
  }

  vm.add = function () {
    angular.element('#addModal').modal('show')
  }

  vm.addMember = function (data, myForm) {
    getDataFactory.addMembership().save(data).$promise
    .then((response) => {
      if (!response.error) {
        vm.getMemberData()
        angular.element('#addModal').modal('hide')
        vm.addformdata = {}
        myForm.$setPristine()
      } else {
        vm.alert = true
        vm.error = response.error.message
      }
    })
  }

  vm.cancel = function (myForm) {
    angular.element('#addModal').modal('hide')
    angular.element('#editModal').modal('hide')
    vm.addformdata = {}
    vm.formdata = {}
    myForm.$setPristine()
    vm.alert = false
  }

  vm.alertFn = function () {
    vm.alert = false
  }
  vm.getMemberData()
})
