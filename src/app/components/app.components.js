import angular from "angular";
import MainController from "./main/main.controller";
import FormController from "./form/form.controller";

export default angular.module("app.components", [])
    .controller("MainController", MainController)
    .controller("FormController", FormController);
