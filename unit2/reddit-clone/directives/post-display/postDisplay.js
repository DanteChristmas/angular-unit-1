angular.module('reddit-clone')
.directive('postDisplay', ['ValidateUtilService', function (_validate) {
  return {
    templateUrl: 'directives/post-display/post-display.html',
    scope: {
      post: '='
    },
    link: function (scope, el, attr) {
      scope.$watch('post.comments.length', function (newValue, oldValue) {
        if(newValue !== oldValue) {
          scope.$emit('update-post', scope.post);
        }
      });

      scope.upvote = function () {
        ++scope.post.votes;
        scope.$emit('update-post', scope.post);
      };

      scope.downvote = function () {
        --scope.votes;
        scope.$emit('update-post', scope.post);
      };
    }
  }
}]);
