angular.module('reddit-clone')
.directive('postList', ['ValidateUtilService', function (_validate) {
  return {
    templateUrl: 'directives/post-list/post-list.html',
    scope : {
      posts: '=',
      filter: '=',
      sort: '='
    }
  };
}]);
