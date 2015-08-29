var app = angular.module('friendsList');

app.controller('mainCtr', function($scope){
	$scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
})