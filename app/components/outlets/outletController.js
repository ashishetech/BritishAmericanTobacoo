var app = angular.module('batApp')
app.controller('viewOutletController', function () {
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
