import angular from 'angular';
angular.module("app", []);


System.import('../app/components/main/main.controller').then(function(module) {
  angular.module('app').controller('MainController', module.default);
  angular.bootstrap(document, ['app']);
}).catch(function(error){
  console.error(error);
});
