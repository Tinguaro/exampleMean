angular.module('main').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'views/main.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}

]);