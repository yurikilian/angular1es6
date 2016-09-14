import angular from 'angular';

Promise.all([
    System.import('../app/components/app.components'),
    System.import('../app/shared/app.shared')
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
