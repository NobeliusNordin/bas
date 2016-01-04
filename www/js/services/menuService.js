 var menuService = angular.module('menuService', [])
 .factory('menuFactory', function() {

//  var menuService = angular.module('menuService')
//  .factory('menuFactory', function($http) {
//   return {
//           get: function() {
//               $http.get('../db/menu.json')
//             }
//         }
//     });


// Some fake data
var menu = [{
  id: 0,
  name: 'Vanilj',
  lastText: 'Mmmm'
}, {
  id: 1,
  name: 'Choklad',
  lastText: 'Yammi'
}, {
  id: 2,
  name: 'Blåbär',
  lastText: 'Mums'
}, {
  id: 3,
  name: 'Lakrits',
  lastText: 'Oooh'
}, {
  id: 4,
  name: 'Jordgubb',
  lastText: 'Aaah'
}];

return {
  all: function() {
    return menu;
  },
  remove: function(menu) {
    menuFactory.splice(menuFactory.indexOf(menu), 1);
  },
  get: function(menuId) {
    for (var i = 0; i < menuFactory.length; i++) {
      if (menuFactory[i].id === parseInt(menuId)) {
        return menuFactory[i];
      }
    }
    return null;
    }
  };
});
