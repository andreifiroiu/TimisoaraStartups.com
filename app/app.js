'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('timisoaraStartupsApp', [
	'ngRoute',
	'timisoaraStartupsApp.home',
	'timisoaraStartupsApp.disclaimer',
	'timisoaraStartupsApp.version'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

