angular.module('batApp').directive('dynamicTable', () => ({
  templateUrl: './common/tables.html',
  scope: {
    tabledata: '=',
    viewtabledata: '=',
    onedit:'&',
    onadd:'&'
  },
  controller ($scope, $interval) {
    $scope.tabledetails = $scope.tabledata
    $scope.tablebody = $scope.viewtabledata
    $interval(function () {
      $scope.tablebody = $scope.viewtabledata
    }, 0)
  }
}))
