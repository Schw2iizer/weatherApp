var app = angular.module("weatherApp");

app.directive("aDirective", function(){
	return {
		restrict: "E", 
		templateUrl: "directives/aDirective.html",
		scope: {
			// @ = &
			message: "@",
			variable: "=",
			funk: "&"

		}
	}
