export default class MainController {
    constructor($window) {
      $window.alert("loucura!!");
      this.nomeAplicacao = "teste";
    }
}


MainController.$inject = ["$window"];
