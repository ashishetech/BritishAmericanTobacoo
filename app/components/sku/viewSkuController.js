angular.module('batApp').controller('viewSkuController', function (getDataFactory, $state) {
  var vm = this
  vm.skuList = []
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
  getDataFactory.getSkuViewData().query().$promise
     .then((response) => {
       if (response.error) {} else {
         angular.forEach(response, (value, key) => {
           value.sku.createdAt = moment(value.sku.createdAt).format('DD MMMM, YYYY')

           vm.skuList.push([value.sku.id, value.sku.productname, value.sku.brand_id, value.sku.createdAt, value.sku.bat_id, value.sku.basepoint])
         })
       }
     })
  vm.add = function () {
    $state.go('menuTemplate.addSku')
  }
})
