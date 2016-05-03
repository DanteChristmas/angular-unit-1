angular.module('filters-sample', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.vm = {};
  $scope.vm.sampleText = "a_bunch_of_underscores";
  $scope.vm.sampleList = [
    {
      id: 1,
      shouldShow: true
    },
    {
      id: 2,
      shouldShow: false
    },
    {
      id: 3,
      shouldShow: true
    },
    {
      id: 4,
      shouldShow: false
    },
    {
      id: 5,
      shouldShow: true
    },
    {
      id: 6,
      shouldShow: false
    }
  ]
}])
.filter('kebab', [function () {
  return function (input) {
    return input.replace(/_/g , "-");
  };
}])
.filter('flagged', [function () {
  return function (items, flagState) {
    var filtered = [];
    angular.forEach(items, function (item) {
      if(item.shouldShow == flagState) {
        filtered.push(item);
      }
    });
    return filtered;
  }
}]);
