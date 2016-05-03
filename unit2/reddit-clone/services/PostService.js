angular.module('reddit-clone')
.service('PostService', ['$log', 'ValidateUtilService', 'LocalStoreService',
function ($log, _validate, _local) {
  var _data = null,
    storeKey = 'reddit-clone-posts';

  var updatePosts = function (newPosts) {
    _data = newPosts;
    _local.set(storeKey, _data);
  };

  var service = {
    all: function () {
      if(_validate.isSet(_data)){
        $log.info("Retrieving Post data from local cache");
        return _data;
      }
      $log.info('Retrieving Post data from localstore...');
      _data = _local.find(storeKey);
      return _validate.isSet(_data) ? _data : [];
    },

    find: function (postId) {
      var posts = service.all();
      return _.find(posts, function (p) { return p.id === postId});
    },

    create: function (post) {
      if(_validate.isSet(post)) {
        var posts = service.all();
        post.id = posts.length;
        post.comments = [];
        post.votes = 0;
        posts.push(post);
        updatePosts(posts);
        return _data;
      };
      $log.error('You must provide a valid post to create');
    },

    update: function (post) {
      if(_validate.isSet(post)) {
        var posts = service.all();
        var index = _.findIndex(posts, function (p) { return p.id === post.id});
        posts.splice(index, 1, post);
        updatePosts(posts);
        return _data;
      }
      $log.error('You must provide a post to update!');
    },

    delete: function (postId) {
      if(_validate.isSet(postId)) {
        var posts = service.all();
        var index = _.findIndex(posts, function (p) { return p.id === postId});
        posts.splice(index, 1);
        updatePosts(posts);
        return _data;
      }
      $log.error('You must provide and id to delete!');
    },
    data: _data
  };

  return service;
}]);
