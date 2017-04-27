'use strict'
angular.module('batApp')
    .controller('LoginController', function ($localStorage, getDataFactory, $state) {
      var vm = this
      vm.isLoading = false
      vm.buttonLogin = true
      vm.submit = function (data) {
        vm.isLoading = true
        vm.buttonLogin = false
        getDataFactory.login().save(data).$promise
                .then((response) => {
                  if (!response.error) {
                    $localStorage.token = response.token
                    $state.go('menuTemplate')
                  } else {
                    vm.isLoading = false
                    vm.buttonLogin = true
                  }
                })
      }
    })
