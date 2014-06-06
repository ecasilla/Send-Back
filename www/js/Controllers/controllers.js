angular.module('sendBack.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('MessagesCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate,Messages) {

  $scope.messages = Messages.all()

$scope.canDragContent = function() {
    $ionicSideMenuDelegate.canDragContent(false);
  };

$ionicModal.fromTemplateUrl('../../templates/modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });
})

.controller('ModalCtrl', function($scope, $ionicPopup) {
  $scope.newMessage = {};

  $scope.createMessage = function() {
    console.log('Create Message', $scope.newMessage);
    $scope.modal.hide();
  };

  $scope.list = [
    {id: 1, title: 'Ernie'},
    {id: 2, title: 'Mary Ann'},
    {id: 3, title: 'Some DUDE'},
    {id: 4, title: 'Some DUDE'},
    {id: 5, title: 'Some DUDE'},
  ];

  $scope.addFromList = function() {
    $ionicPopup.show({
      templateUrl: 'popup.html',
      title: 'Select',
      scope: $scope,
      buttons: [{
        text: 'Ok',
        type: 'button-positive',
        onTap: function() {
          return true;
        }
      }]
    });
  };
})

.controller('MessageCtrl', function($scope, $stateParams, Messages, $ionicFrostedDelegate, $ionicScrollDelegate, $rootScope) {
  $scope.message = Messages.get($stateParams.messageId)
    var messageIter = 0;

  $scope.messages = Messages.all().slice(0, Messages.all().length);

  $scope.add = function() {
    var nextMessage = Messages.all()[messageIter++ % Messages.all().length];
    $scope.messages.push(angular.extend({}, nextMessage));

    // Update the scroll area and tell the frosted glass to redraw itself
    $ionicFrostedDelegate.update();
    $ionicScrollDelegate.scrollBottom(true);
  };
})

.controller('ListsCtrl', function($scope, $stateParams, Lists) {
  $scope.lists = Lists.all()
})

.controller('LaterCtrl', function($scope, $stateParams) {

})

.controller('ArchiveCtrl', function($scope, $stateParams) {

})
.controller('TrashCtrl', function($scope, $stateParams) {

})
.controller('SentCtrl', function($scope, $stateParams) {

})
