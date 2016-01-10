// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var menuApp = angular.module('menuApp',
[ 'ionic',
'menuService',
//'orderService',
'menuAppControllers']);


menuApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


menuApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('startPage', {
    url: "/",
    templateUrl: 'js/views/startPage/startPage.html',
    controller: 'startPageCtrl'

  })

  .state('mainMenu', {
    url: "/menu",
    templateUrl: "js/views/mainMenu/mainMenu.html",
    controller: 'mainMenuCtrl'

  })

  .state('myOrder', {
    url: "/order",
    templateUrl: "js/views/myOrder/myOrder.html",
    controller: 'myOrderCtrl'

  })

  .state('placeOrder', {
    url: "/placeOrder",
    templateUrl: "js/views/placeOrder/placeOrder.html",
    controller: 'placeOrderCtrl'

  })

  .state('subMenu', {
    url: "/subMenu",
    templateUrl: "js/views/subMenu/subMenu.html",
    controller: 'subMenuCtrl'

  });
  $urlRouterProvider.otherwise('/');
});
