'use strict'

angular.module('batApp', ['ui.router', 'ngResource', 'ngStorage', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login')
      $stateProvider
            .state('menuTemplate', {
              templateUrl: 'components/template/menuTemplate.html',
              controller: 'TemplateController as template'
            })
            .state('login', {
              url: '/login',
              templateUrl: 'components/login/login.html',
              controller: 'LoginController as login'
            })
            .state('menuTemplate.outletViewTable', {
              url: '/outletViewTable',
              templateUrl: 'components/outlets/outletView.html',
              controller: 'viewOutletController as batCtrl'
            })
			.state('menuTemplate.editOutlet', {
              url: '/editOutlet',
              templateUrl: 'components/outlets/editOutlet/editOutlet.html',
              controller: 'EditOutletController as editOutletCtrl'
		  })
		.state('menuTemplate.tme', {
		  url: '/tme',
		  templateUrl: 'components/tme/tmeView.html',
		  controller: 'viewTmeController as viewTmeCtrl'
	  })
	  .state('menuTemplate.TmeEdit', {
		url: '/TmeEdit',
		templateUrl: 'components/tmeEdit/tmeEdit.html',
		controller: 'TmeEditController as tmeEditCtrl'
	})
	.state('menuTemplate.editMembership', {
	  url: '/editMembership',
	  templateUrl: 'components/membership/editMembership.html',
	  controller: 'EditMembershipController as editMemberCtrl'
  })
})
