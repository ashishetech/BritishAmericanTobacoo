angular.module('batApp').directive('dynamicTable', () => ({
  templateUrl: './common/tables.html',
  scope: {
    tabledata: '=',
    viewtabledata: '=',
    onadd:'&'
  },
  controller ($scope) {
    $scope.tabledetails = $scope.tabledata
    $scope.tablebody = $scope.viewtabledata
  }
}))
