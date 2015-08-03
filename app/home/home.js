'use strict';

angular.module('timisoaraStartupsApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ["$scope", "$http", function($scope, $http)
{
	$scope.path = "/bizsource/timisoarastartups/app";

	// @TODO: move the data in a database (mongo?)
	$http.get('data/startups.json').success(function(data) {
		$scope.startups = data.items;
	});

	$http.get('data/people.json').success(function(data) {
		$scope.people = data.items;
	});

	$http.get('data/other.json').success(function(data) {
		$scope.others = data.items;
	});
	
	$scope.filterSection = function(section, filter)
	{
		$("#" + section + "filters li a").removeClass('selected')
		$("#" + section + "filters li a." + filter).addClass('selected');

		if (filter == "all")
			$("#" + section + " .element:hidden").show(400);
		else
		{
			$("#" + section + " .element:visible:not(." + filter + ")").hide(400);	
			$("#" + section + " ." + filter + ":hidden").show(400);
		}
	}

	/*$scope.slideTo = function(slide)
	{
		$('html, body').animate({
			scrollTop: $("#slide" + slide).offset().top
		}, 2000);
	}*/
}]);


//https://logo.clearbit.com/stylejukebox.com