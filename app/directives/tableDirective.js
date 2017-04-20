var app = angular.module('batApp')
app.directive('mytable', function () {
  return {
    restrict: 'EAC',
    templateUrl: './common/tables.html',
    scope: {
      parameter: '='
    },
    controller: function ($scope) {
      $scope.tabledetails = $scope.parameter
    }
  }
})
