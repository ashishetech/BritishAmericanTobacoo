angular.module('batApp').controller('viewBrandController', function (getDataFactory, setDataService, $state) {
  var vm = this
  vm.membershipList = []
  vm.data = {
    tabletitle: 'ALL BRANDS',
    tableSubTitle: 'All Brands',
    values: ['ID',
      'Name',
      'BAT ID',
      'Number of SKU'

    ],
    alink: {
      Text1: 'ADD BRAND',
      Text:'Edit'
    }

  }
  setDataService.setBrandControllerData().then((response) => {
    vm.brandList = response
  })
  vm.add = function () {
    $state.go('menuTemplate.addBrand')
  }
})
