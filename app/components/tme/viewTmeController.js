angular.module('batApp').controller('viewTmeController', function (getDataFactory, $state) {
  var vm = this
  vm.tmeList = []
  vm.data = {
    tabletitle: 'TME ACCOUNTS',
    tableSubTitle: 'TME Accounts',
    values: ['ID',
      'First Name',
      'Last Name',
      'Email',
      'Outlets',
      'Last Login'
    ],
    alink: {
      Text1: 'ADD TME',
      Text:'Edit'
    }
  }
  getDataFactory.getTmeViewData().query().$promise
     .then((response) => {
       if (response.error) {} else {
         angular.forEach(response, (value, key) => {
           value.updatedAt = moment(value.updatedAt).format('DD MMMM, YYYY')
           vm.tmeList.push([value.id, value.first_name, value.last_name, value.email, value.outlets, value.updatedAt])
         })
       }
     })
  vm.add = function () {
    $state.go('menuTemplate.addTme')
  }
})
