menuApp.directive('startPageDir', function ($compile) {
  return {
    restrict: 'C',
    template: "<div class='list list-inset'><label class='item item-input'><span class='input-label'>Direktiv</span><input type='text' placeholder='Skriv något' ng-model='swirlsContent' /></label></div> {{swirlsContent}} <br />"
  };
});
