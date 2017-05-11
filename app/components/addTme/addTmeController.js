'use strict'
angular.module('batApp')
    .controller('addTmeController', function (getDataFactory, $state) {
      var vm = this


      vm.save = function (data) {
        console.log(data)
        getDataFactory.addTme().save(data).$promise
                .then((response) => {
                if (!response.error) {
                  $state.go('menuTemplate.tmeViewTable')
                  }
                  else{
                      vm.errmsg=response.error.message
                    console.log(response.error)
                  }
                })
      }
      vm.change = function () {
      vm.errmsg=''
      }
    })
