'use strict'
angular.module('batApp')
    .controller('addTmeController', function (getDataFactory, $state) {
      var vm = this
      vm.err = false

      vm.save = function (data) {
        getDataFactory.addTme().save(data).$promise
                .then((response) => {
                  if (!response.error) {
                    $state.go('menuTemplate.tmeViewTable')
                  }
                })
      }
      vm.change = function () {
        vm.err = false
      }
    })
