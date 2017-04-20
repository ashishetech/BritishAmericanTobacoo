'use strict'

var app = angular.module('batApp')
app.controller('loginController', function ($localStorage, getDataFactory, $state) {
	this.submit = function (data) {
        var url = '/admin/login'
        getDataFactory.sendData(url).save(data).$promise
            .then((response) => {
                if (response.error) {
                    console.log(response)

                } else {
                    console.log('>>>>>>>>>>>>', response)
                    $localStorage.token = response.token
                    console.log('>>>>>>>>>>>>>>>else', $localStorage.token)
                    $state.go('outlet')
                }
            })
    }
})
