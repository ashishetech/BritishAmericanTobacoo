angular.module('batApp').controller('viewMembershipController', function (getDataFactory, setDataService) {
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
  setDataService.setMembershipControllerData().then((response) => {
    vm.membershipList = response
  })
})
