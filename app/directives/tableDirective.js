var app = angular.module('batApp')
app.directive('dynamicTable', function () {
  return {
    restrict: 'EAC',
    templateUrl: './common/tables.html',
    scope: {
      tabledata: '=',
      viewtabledata:'='
    },
    controller: function ($scope) {
      $scope.tabledetails = $scope.tabledata
      $scope.tablebody = $scope.viewtabledata
    }
  }
})
