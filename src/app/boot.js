//var modulePaths = ['../app/components/app.components', '../app/shared/app.shared'];

import angular from 'angular';

Promise.all([
    System.import('../app/components/app.components.js'),
    System.import('../app/shared/app.shared.js')
]).then(modules => {
    let dependencies = [];
    modules.forEach(module => {
        dependencies.push(module.default.name);
    })
    angular.module("app", dependencies);
    angular.bootstrap(document, ['app']);
}).catch(error => {
    console.error(error.message)
});
