angular.module('myApp', []);
angular.module('myApp').controller('myAppCtrl', function($scope){

	$scope.contentBtn = function(page){
		$scope.content = page;
	};
});