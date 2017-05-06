angular.module('batApp').controller('viewMembershipController', function (getDataFactory, $state, shareDataService) {
  var vm = this
  vm.membershipList = []
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
  getDataFactory.getMembershipViewData().query().$promise
     .then((response) => {
       console.log('>>>>>>>>>>>>>>>>>>..response is', response)
       if (response.error) {} else {
         angular.forEach(response, (value, key) => {
           console.log('>>>>>>>>>>>>>>>>>>.', value.id)
           vm.membershipList.push([value.id, value.type_name, value.rebate_rate, value.min_required_points, value.order])
         })
       }
     })

  vm.edit = function (data) {
    console.log(data)
    shareDataService.addId(data)
    $state.go('menuTemplate.editMembership')
  }

  vm.add = function (data) {
    console.log(data)
    angular.element('#myModal').modal('show')
    // shareDataService.addId(data)
    // $state.go('menuTemplate.editMembership')
  }
})
