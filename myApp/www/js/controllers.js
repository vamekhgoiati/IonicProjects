angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FeedsCtrl', function($scope, Feeds) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.feeds = Feeds.all();
  $scope.remove = function(feed) {
    Feeds.remove(feed);
  };
})

.controller('FeedDetailCtrl', function($scope, $stateParams, Feeds) {
  $scope.feed = Feeds.get($stateParams.feedId);
})

.controller('FavouritesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
