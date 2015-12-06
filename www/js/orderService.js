angular.module('menuApp').factory('orderFactory', function(){
  return {
          get:  function(){
              $http.get('../db/orders.json');
          }
});
