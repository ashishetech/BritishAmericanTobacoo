var app = angular.module('batApp')
app.config(function ($httpProvider) {
	$httpProvider.interceptors.push('Interceptor')
})
