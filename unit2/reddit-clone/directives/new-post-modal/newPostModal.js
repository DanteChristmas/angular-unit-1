angular.module('reddit-clone')
.directive('newPostModal', ['ValidateUtilService', function (_validate) {
  return {
    templateUrl: 'directives/new-post-modal/new-post-modal.html',
    scope:{
      submitHandler: '&'
    },
    link: function (scope, el, attrs) {
      scope.newPost = {};

      scope.submitPost = function () {
        var postCopy = angular.copy(scope.newPost);
        scope.newPost = {};
        scope.submitHandler({newPost: postCopy});
      }
    }
  }
}]);
