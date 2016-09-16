import angular from 'angular';

var paths = ["components/app.components.js", "shared/app.shared.js"];

Promise.all(paths.map(path => System.import('../app/' + path))).then(modules => {
    let dependencies = [];
    modules.forEach(module => {
        dependencies.push(module.default.name);
    })
    angular.module("app", dependencies);
    angular.bootstrap(document, ['app']);
}).catch(error => {
    console.error(error.message)
});
