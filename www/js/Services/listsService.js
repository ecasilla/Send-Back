angular.module('sendBack.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Lists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Lists = [
    { id: 1, title: 'Shit I need to do', content: 'I am the best developer ever', from: "Ernie", time: '8:30' },
    { id: 2, title: 'I Cant Even Deal with this', from: "Group",time: '7:55' },
  ];

  return {
    all: function() {
      return Lists;
    },
    get: function(Listsid) {
      // Simple index lookup
      return Lists[Listsid -1];
    }
  }
});
