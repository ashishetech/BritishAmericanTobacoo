angular.module('batApp').controller('viewTmeController', function (getDataFactory, $state, setDataService) {
  var vm = this
  vm.tmeList = []
  vm.data = {
    tabletitle: 'TME ACCOUNTS',
    tableSubTitle: 'TME Accounts',
    values: ['ID',
      'First Name',
      'Last Name',
      'Email',
      'Outlets',
      'Last Login'
    ],
    alink: {
      Text1: 'ADD TME',
      Text:'Edit'
    }
  }
  setDataService.setTmeControllerData().then((response) => {
    vm.tmeList = response
  })
  vm.add = function () {
    $state.go('menuTemplate.addTme')
  }
})
