/*
class Main {
    constructor() {
        let button = document.querySelector("#btnImportar");
        button.addEventListener("click", () => {
            System.import("./teste").then(this.trabalharModulo)
        });
    }

    trabalharModulo(modulo) {
        console.log("Versão do módulo: " + modulo.appVersion);
    }

}


let main = new Main();

*/


import angular from 'angular';
angular.module("app", []);

System.import('./main-controller').then(function(module) {
  angular.module('app').controller('MainController', module.default);
  angular.bootstrap(document, ['app']);
}).catch(function(error){
  alert(error);
});
