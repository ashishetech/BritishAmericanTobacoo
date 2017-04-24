'use strict'
angular.module('batApp')
    .controller('LoginController', function($localStorage, getDataFactory, $state) {
        var vm = this
        vm.submit = function(data) {
            var url = '/admin/login'
            getDataFactory.login(url).save(data).$promise
                .then((response) => {
                    if (!response.error) {
                        $localStorage.token = response.token
                        $state.go('template')
                    }
                })
        }
    })
