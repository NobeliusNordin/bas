var orderService = angular.module('orderService')
.factory('orderFactory', function(){
  return {
          get:  function(){
              $http.get('../db/orders.json');
          }
      }
});
