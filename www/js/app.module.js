(function(){
  'use strict';

  angular.module('ionicStudyApp', ['ionic', 'controllerModule', 'servicesModule', 'ngCordova']);

  angular.module('ionicStudyApp')
      .run(runningApp);

  angular.module('ionicStudyApp')
      .config(mainConfig);

  ////////////////////////////////////////
  runningApp.$inject = ['$ionicPlatform','$cordovaDevice','$cordovaKeyboard','$cordovaStatusbar'];
  function runningApp($ionicPlatform,$cordovaDevice,$cordovaKeyboard,$cordovaStatusbar){
    $ionicPlatform.ready(function(){
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboar for form inputs)

      $cordovaKeyboard.hideAccessoryBar(true);

      $cordovaStatusbar.style(0); // == StatusBar.styleLightContent();

    });
  }

  mainConfig.$inject=['$stateProvider', '$urlRouterProvider','$ionicConfigProvider'];
  function mainConfig($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.j
    $stateProvider
      // setup an abstract state for the tabs directive
        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
        })
      // Each tab has its own nav history stack:
        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        })
        .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        })
        .state('test', {
          url: '/test',
          views: {
            'test': {
              templateUrl: 'templates/tab-test.html',
              controller: 'TestCtrl'
            }
          }})
        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl'
            }
          }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');
  }
})();






