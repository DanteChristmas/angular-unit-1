angular.module('reddit-clone')
.directive('comments', ['ValidateUtilService', function (_validate) {
  return {
    templateUrl: 'directives/comments/comments.html',
    scope: {
      postComments: '='
    },
    link: function (scope, el, attrs) {
      scope.vm = {};
      scope.vm.newComment = {};
      scope.vm.showForm = false;

      scope.addComment = function () {
        scope.vm.showForm = false;
        var copy = angular.copy(scope.vm.newComment);
        debugger;
        scope.vm.newComment = {};
        scope.postComments.push(copy);
      };

      scope.toggleForm = function () {
        scope.vm.showForm = !scope.vm.showForm;
      }
    }
  };
}]);
