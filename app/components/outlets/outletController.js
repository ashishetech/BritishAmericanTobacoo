var app = angular.module('invisionApp')
app.controller('viewOutletController', function () {
  url = '/outlet/get/-1/1'
  this.data = {
    id:'ID',
    bat_id:'BAT ID',
    store_name:'Store Name',
    Points:'Points',
    last_access:'Last Accessed',
    perform:'Performance',
    Assign_Time:'Assigned TME',
    Assign_Timew:'Assigned TME'
  }
})
