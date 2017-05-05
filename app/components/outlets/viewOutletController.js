angular.module('batApp').controller('viewOutletController', function (getDataFactory, shareDataService, setDataService, $state) {
  var vm = this
  vm.outletList = []
  vm.data = {
    tabletitle: 'OUTLETS',
    values: ['ID',
      'BAT ID',
      'Store Name',
      'Points',
      'Last Accessed',
      'Performance',
      'Assigned TME'
    ],
    alink: {
      Type: 'SUBMIT',
      Text: 'Edit Account'
    }
  }

  vm.edit = function (data) {
    console.log(data)
    shareDataService.addId(data)
    $state.go('menuTemplate.editOutlet')
  }
  setDataService.setOutletControllerData().then((response) => {
    vm.outletList = response
  })
})
