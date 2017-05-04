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
.state('menuTemplate.addOutlet', {
  url: '/addOutlet',
  templateUrl: 'components/addOutlet/addOutlet.html',
  controller: 'addOutletController as addOutletCtrl'
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
.state('menuTemplate.addMembership', {
  url: '/addMembership',
  templateUrl: 'components/membership/addMembership/addMembership.html',
  controller: 'AddMembershipController as addMemberCtrl'
})
.state('menuTemplate.editMembership', {
  url: '/editMembership',
  templateUrl: 'components/membership/editMembership/editMembership.html',
  controller: 'EditMembershipController as editMemberCtrl'
})
.state('menuTemplate.skuViewTable', {
  url: '/skuViewTable',
  templateUrl: 'components/sku/skuView.html',
  controller: 'viewSkuController as viewSkuCtrl'
})
})
