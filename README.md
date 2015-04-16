# ionic study with tabs

After creating a new ionic project through > ionic start project_name tabs, we should modify some files for cordova such as config.xml. The items need to be addes into config.xml:
 
 * name tag : the name of the app
 * description tag
 * author tag


And then, run npm install to install all required node packages for development such as gulp, bower, and so on. Run bower install to install all required packages such as "bower install ngCordova --save". Add  <script src="lib/ng-cordova.js"></script> to the index.html in root www folder before cordova.js.

As to cordova plugins, we just need to download them straightway using ">cordova plugin add package_name" (please reference site: http://plugins.cordova.io/#/). No further configuration for the plugins. Cordova or ionic can do with them for us automatically. ngCorvoda can be used in our code directly after installing the required plugin.


And here's some inital code!

```javascript
(function(){
  'use strict';

  angular.module('ionicStudyApp', ['ionic', 'ngCordova']);

  angular.module('ionicStudyApp')
      .run(runningApp);

  angular.module('ionicStudyApp')
      .config(mainConfig);

  ////////////////////////////////////////
  runningApp.$inject = ['$ionicPlatform','$cordovaDevice','$cordovaKeyboard','$cordovaStatusbar'];
  
  function runningApp($ionicPlatform,$cordovaDevice,$cordovaKeyboard,$cordovaStatusbar){
   
   //== cordova 'deviceready'
   $ionicPlatform.ready(function(){
      
      //just for testing
      alert($cordovaDevice.getPlatform());
      
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboar for form inputs)
      $cordovaKeyboard.hideAccessoryBar(true);

      $cordovaStatusbar.style(0); // == StatusBar.styleLightContent();

    });
  }
  
  mainConfig.$inject=['$stateProvider', '$urlRouterProvider','$ionicConfigProvider'];
   
  function mainConfig($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    //very useful for android platform
    //make sure to keep the tabs on the bottoms (by default tabs are the top in android OS)
    $ionicConfigProvider.tabs.position('bottom');
   
   
    ... (UI-Routing code)
     
  }
})();
```
