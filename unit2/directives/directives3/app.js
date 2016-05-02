angular.module('myapp', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.vm = {};
  $scope.vm.mystuff = [
    {
      id: 1,
      title: "title",
      author: "author"
    },
    {
      id: 2,
      title: "title",
      author: "author"
    },
    {
      id: 3,
      title: "title",
      author: "author"
    },
    {
      id: 4,
      title: "title",
      author: "author"
    }
  ];
}]);
