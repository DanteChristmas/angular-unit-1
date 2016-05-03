angular.module('myapp', [])
.controller('MainCtrl', function ($scope, TestService) {
  $scope.vm = {};
  $scope.vm.obj1 = TestService.data;

})
.service('TestService', function () {
  return {
    data: {id: 1}
  }
})
