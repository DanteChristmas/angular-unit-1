angular.module('myapp', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.vm = {};
  $scope.vm.myList = [
    {
      id: 1,
      title: "title 1"
    },
    {
      id: 2,
      title: "title 2"
    },
    {
      id: 3,
      title: "title 3"
    },
    {
      id: 4,
      title: "title 4"
    },
    {
      id:5,
      title: "title5"
    },
    {
      id: 6,
      title: "title 6"
    }
  ];

  $scope.vm.greeting = "hello!";

  $scope.vm.otherText = "some text";
}])
.directive('tightCouple', ['$log', function ($log) {
  return {
    templateUrl: 'partials/tight-couple.html'
  }
}])
.directive('looseCouple', ['$log', function ($log) {
  return {
    scope: {
      list: '='
    },
    templateUrl: 'partials/loose-couple.html'
  }
}])
.directive('inputTest', ['$log', function ($log) {
  return {
    template: '<input type="text" ng-model="vm.otherText">'
  }
}])
.directive('isolatedInput', ['$log', function ($log) {
  return {
    scope: {
      someText: '@'
    },
    template: '<input type="text" ng-model="someText">'
  }
}]);
