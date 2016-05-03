angular.module('myapp', [])
.controller('MainCtrl', ['$scope', 'basicFactory', 'basicService',
  function ($scope, basicFactory, basicService) {
    $scope.vm = {};

    $scope.vm.factoryGreeting = basicFactory.getGreeting();
    $scope.vm.factoryInput = basicFactory.getGreeting();
    $scope.setFactoryGreeting = function () {
      $scope.vm.factoryGreeting = basicFactory.setGreeting($scope.vm.factoryInput);
    };

    $scope.vm.serviceGreeting = basicService.getGreeting();
    $scope.vm.serviceInput = basicService.getGreeting();
    $scope.setServiceGreeting = function () {
      $scope.vm.serviceGreeting = basicService.setGreeting($scope.vm.serviceInput);
    }
}]);
