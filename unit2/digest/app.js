angular.module('myapp', [])
.controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.vm = {};
  $scope.vm.value = "hello!";

  setTimeout(function () {
    console.log('setTimeout finished');
    $scope.vm.value = "goodbye!";
    $scope.$apply();
  }, 1000);



  $scope.$watch(function () {
    console.log('digest fired');
    // $scope.vm.value += "stuff";
  });
}]);
