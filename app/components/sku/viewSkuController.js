angular.module('batApp').controller('viewSkuController', function (getDataFactory, $state, setDataService, shareDataService) {
  var vm = this

  vm.data = {
    tabletitle: 'ALL SKU',
    tableSubTitle: "SKU's",
    values: ['ID',
      'Name',
      'Brand ID',
      'Start Date',
      'BAT ID',
      'Base Points'

    ],
    alink: {
      Text1: 'ADD SKU',
      Text:'Edit'
    }

  }
  setDataService.setSkuControllerData().then((response) => {
    vm.skuList = response
  })
  vm.add = function () {
    $state.go('menuTemplate.addSku')
  }
  vm.edit = function (data) {
    shareDataService.addId(data)
    $state.go('menuTemplate.editSku')
  }
})
