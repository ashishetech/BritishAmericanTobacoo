var app = angular.module('batApp')
app.controller('viewOutletController', function (getDataFactory) {
  url = '/outlet/get/-1/1'
  this.outletList = []
  this.data = { tabletitle: 'OUTLETS',
    values:[ 'ID',
      'BAT ID',
      'Store Name',
      'Points',
      'Last Accessed',
      'Performance',
      'Assigned TME'],
    alink: { Type: 'SUBMIT', Text: 'Edit Account' },
    controller:'outletCtrl'
  }
  getDataFactory.getApiData(url).query().$promise
   .then((response) => {
     console.log('>>>>>>>>>>>>>>>>>.response is', response)
     if (response.error) {
     } else {
       angular.forEach(response, (value, key) => {
         this.outletList.push({ value:value.data, tme:value.tme })
       })
     }
   })
})
