angular.module('main').controller('MainController', ['$scope',
 function($scope){
 	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum diam commodo elit sodales, at blandit tellus congue. Nullam rhoncus felis nunc, a finibus lectus ultrices id. Etiam condimentum accumsan ex et pretium. Nulla odio neque, blandit sit amet erat id, rutrum ultrices orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ......";
 	var title = "Title"
 	$scope.mean = {
 		"title": title,
 		"lorem": lorem
 	}
 }
]);