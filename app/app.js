'use strict'

var app = angular.module ('batApp', ['ui.router', 'ngResource', 'ngStorage'])
app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login')
	$stateProvider
		.state('outlet', {
			url: '/outlet',
			templateUrl: 'components/outlet/outlet.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'components/login/login.html',
			controller: 'loginController as login',
		})
})
