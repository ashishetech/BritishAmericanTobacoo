angular.module('batApp')
.directive('dynamicForm', function () {
  return {
    restrict:'AE',
    replace: true,
    scope: {
      formdata:'=',
      submitted:'=',
      error:'=',
      send: '&'
    },
    controller: function ($scope) {
      $scope.apply = function (data) {
        console.log(data)
        $scope.send({ data:data })
        $scope.myForm.$setPristine()
      }
    },
    templateUrl:'common/membership.template.html'
  }
})
