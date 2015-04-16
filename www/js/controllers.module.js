(function(){
  'use strict';

  angular.module('controllerModule', []);

  angular.module('controllerModule')
      .controller('DashCtrl', function($scope) {})
      .controller('ChatsCtrl', function($scope, Chats) {
          $scope.chats = Chats.all();
          $scope.remove = function(chat) {
            Chats.remove(chat);
          }
      })
      .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
          $scope.chat = Chats.get($stateParams.chatId);
      })
      .controller('AccountCtrl', function($scope) {
        $scope.settings = {
           enableFriends: true
        };
      })
      .controller('TestCtrl', function($scope, $ionicActionSheet, $timeout){

          $scope.show = function() {
              // Show the action sheet
              var hideSheet = $ionicActionSheet.show({
                  buttons: [
                      { text: '<b>Share</b> This' },
                      { text: 'Move' }
                  ],
                  destructiveText: 'Delete',
                  titleText: 'Modify your album',
                  cancelText: 'Cancel',
                  cancel: function() {
                      // add cancel code..
                  },
                  buttonClicked: function(index) {
                      return true;
                  }
              });

          };

          $timeout(function() {
              hideSheet();
          }, 2000);

          //$ionicBackdrop
          $scope.action = function() {
              $ionicBackdrop.retain();
              $timeout(function() {
                  $ionicBackdrop.release();
              }, 1000);
          };
      });

})();





