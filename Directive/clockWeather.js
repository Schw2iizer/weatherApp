var app = angular.module("weatherApp");
app.directive("clockWeather", function($interval){
	return {
		template: "<div> {{hours}}:{{minutes}}:{{seconds}} </div>",
		restrict: "E",
		link: function(scope, elem, attrs){
			var date = new Date();
			scope.hours = date.getHours() - 12;
			scope.minutes = date.getMinutes();
			scope.seconds = date.getSeconds();
			$interval(function() {
					var date = new Date();
			scope.hours = date.getHours() - 12;
			scope.minutes = date.getMinutes();
			scope.seconds = date.getSeconds();
		}, 1000)
		}
	}
});