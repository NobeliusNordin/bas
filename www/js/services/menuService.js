angular.module('menuApp').factory('menuFactory' '$http', function($http){
  return {
          get:  function(){
              $http.get('../db/menu.json');
          }
});
