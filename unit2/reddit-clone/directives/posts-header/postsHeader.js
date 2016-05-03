angular.module('reddit-clone')
.directive('postsHeader', ['ValidateUtilService', function (_validate) {
  return {
    templateUrl: 'directives/posts-header/posts-header.html',
    scope: {
      sort: '=',
      filter: '='
    },
    link: function (scope, el, attrs) {
      scope.sortDesc = function () {
        scope.sort.direction = false;
      };

      scope.sortAsc = function () {
        scope.sort.direction = true;
      };

      scope.toggleFavs = function () {
        scope.filter.showFavs = !scope.filter.showFavs;
      };
    }
  }
}]);
