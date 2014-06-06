// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('sendBack', ['ionic', 'sendBack.controllers','sendBack.services','ionic.contrib.frostedGlass'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.inbox', {
      url: "/inbox",
      views: {
        'menuContent' :{
          templateUrl: "templates/messagesLists.html"
        }
      }
    })
    .state('app.Lists', {
          url: "/Lists",
          views: {
            'menuContent' :{
              templateUrl: "templates/Lists.html",
              controller: 'ListsCtrl'
            }
          }
        })
        .state('app.Later', {
          url: "/Later",
          views: {
            'menuContent' :{
              templateUrl: "templates/Later.html",
              controller: 'LaterCtrl'
            }
          }
        })
    .state('app.Messages', {
      url: "/Messages",
      views: {
        'menuContent' :{
          templateUrl: "templates/messagesLists.html",
          controller: 'MessagesCtrl'
        }
      }
    })
.state('app.Archive', {
      url: "/Archive",
      views: {
        'menuContent' :{
          templateUrl: "templates/archive.html",
          controller: 'ArchiveCtrl'
        }
      }
    })
.state('app.Trash', {
      url: "/Trash",
      views: {
        'menuContent' :{
          templateUrl: "templates/trash.html",
          controller: 'TrashCtrl'
        }
      }
    })
.state('app.Sent', {
      url: "/Sent",
      views: {
        'menuContent' :{
          templateUrl: "templates/sent.html",
          controller: 'SentCtrl'
        }
      }
    })
    .state('app.single', {
      url: "/messages/:messageId",
      views: {
        'menuContent' :{
          templateUrl: "templates/message.html",
          controller: 'MessageCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Messages');
});

