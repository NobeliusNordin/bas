// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('menuApp', ['ionic'])

.run(function($ionicPlatform) {
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


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('startPage', {
    url: '',
    views: {
      'startPage' : {
    template: '<p>TEST</p>',
    //templateUrl: 'startPage/startPage.html',
    controller: 'startPageCtrl'
    }
  }
})
  .state('mainMenu', {
    url: '/menu',
    views: {
      'mainMenu' : {
        templateUrl: 'mainMenu/mainMenu.html',
        controller: 'mainMenuCtrl'
      }
    }
  })
  .state('myOrder', {
    url: '/order',
    views: {
      'myOrder' : {
        templateUrl: 'myOrder/myOrder.html',
        controller: 'myOrderCtrl'
      }
    }
  })
  .state('placeOrder', {
    url: '/placeOrder',
    views: {
      'placeOrder' : {
        templateUrl: 'placeOrder/placeOrder.html',
        controller: 'placeOrderCtrl'
      }
    }
  })
  .state('subMenu', {
    url: '/subMenu',
    views: {
      'subMenu' : {
        templateUrl: 'subMenu/subMenu.html',
        controller: 'subMenuCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise('');
})


.controller('startPageCtrl', function($scope) {
})
.controller('mainMenuCtrl', function($scope) {
})
.controller('myOrderCtrl', function($scope) {
})
.controller('placeOrderCtrl', function($scope) {
})
.controller('subMenuCtrl', function($scope) {
})
