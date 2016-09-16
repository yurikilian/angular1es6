export default class MainController {
    constructor($window) {
      this.nomeAplicacao = "Angular 1 com Webpack 2 e Importação dinamica com System Loader";
    }
}

MainController.$inject = ["$window"];
