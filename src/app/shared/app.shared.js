import angular from 'angular';
import InputDateDirective from './date/input.date';

export default angular.module('app.shared', [])
  .directive('inputDateDirective', InputDateDirective);
