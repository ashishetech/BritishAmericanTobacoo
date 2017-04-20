var app = angular.module('batApp')
app.controller('viewOutletController', function () {
  url = '/outlet/get/-1/1'
  this.data = { tabletitle: 'OUTLET',
    values:[ 'ID',
      'BAT ID',
      'Store Name',
      'Points',
      'Last Accessed',
      'Performance',
      'Assigned TME'],
    alink: { Type: 'SUBMIT', Text: 'Edit Account' }
  }
})
