'use strict';

angular.module('timisoaraStartupsApp.disclaimer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/disclaimer', {
		templateUrl: 'disclaimer/disclaimer.html',
		controller: 'DisclaimerCtrl'
	});
}])

.controller('DisclaimerCtrl', [function() {
	
}]);