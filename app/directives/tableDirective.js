var app = angular.module('invisionApp')
app.directive('mytable', function () {
  return {
    restrict: 'EAC',
    templateUrl: './common/tables.html',
    scope: {
      parameter: '@'
    },
    controller: function ($scope) {
      $scope.tableheading = JSON.parse($scope.parameter)
    }
  }
})
