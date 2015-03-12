var app = angular.module("weatherApp");

app.controller("homeCtrl", function($scope, $location){
	$scope.changeRoute = function(){
		$location.path("/weather/"+$scope.name)
	}
	$scope.name = "Daniel";

	$scope.logger = function(){
		console.log("funk!");
	}
});