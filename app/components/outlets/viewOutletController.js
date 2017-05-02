angular.module('batApp').controller('viewOutletController', function (getDataFactory) {
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
  getDataFactory.getOutletViewData().query().$promise
        .then((response) => {
          if (response.error) {} else {
            angular.forEach(response, (value, key) => {
              value.data.updatedAt = moment(value.data.updatedAt).format('DD MMMM, YYYY')
              if (value.tme == null) {
                value.tme = 'none'
              } else if (value.tme.first_name) {
                value.tme = value.tme.first_name
              }
              vm.outletList.push([value.data.id, value.data.bat_id, value.data.outlet_name, value.data.points_value, value.data.updatedAt, value.data.performance, value.tme])
            })
          }
        })
})
