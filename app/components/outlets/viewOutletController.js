angular.module('batApp').controller('viewOutletController', function (getDataFactory, setDataService) {
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
  setDataService.setOutletControllerData().then((response) => {
    vm.outletList = response
  })
})
