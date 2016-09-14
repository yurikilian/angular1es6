import angular from 'angular';

export default function InputDateDirective() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '<h1>Hello, {{name}} </div>'
    }
}
