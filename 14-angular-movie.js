			var app = angular.module("movieApp", []);
			app.controller("movieCtrl", function($scope) {

				$scope.movies = [{
					name : "Spectra",
					actor : "Daniel Craig",
					pic : "spectra",
					actLink : "http://www.imdb.com/name/nm0185819/"
				}, {
					name : "Star War",
					actor : "Harrison Ford",
					pic : "starWars",
					actLink : "http://www.imdb.com/name/nm0000148/"
				}, {
					name : "The Martian",
					actor : "Matt Damon",
					pic : "theMartian",
					actLink : "http://www.imdb.com/name/nm0000354/"
				}];
			});
			
			app.controller("menuCtrl", function($scope) {
			  	$scope.menus = [
			  	"שחקנים", "המובילים", "חיפוש"
			  	];
			  	$scope.setOption = function(opt) {
			  		
			  	};
			});
			
			app.controller("topMovies", function($scope, $http) {
					$http.get('15-movies.json').success(function(data) {
						$scope.topMovies = data;
				});
			});
			
			app.directive("movie", function(){
				return {
					restrict:"AE",
					templateUrl: "movie-template.html"
				};
			});			
