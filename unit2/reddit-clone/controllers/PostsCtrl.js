angular.module('reddit-clone')
.controller('PostsCtrl', ['$scope', '$log', 'ValidateUtilService', 'PostService',
function ($scope, $log, _validate, _posts) {
  $scope.vm = {};
  $scope.vm.sort = {
    prop: 'votes',
    direction: false
  };
  $scope.vm.filters = {
    query: "",
    showFavs: false
  };
  $scope.vm.posts = _posts.all();

  $scope.addPost = function (newPost) {
    $scope.vm.posts = _posts.create(newPost);
  };

  $scope.$on('update-post', function (e, post) {
    $scope.vm.posts = _posts.update(post)
  });
}]);
