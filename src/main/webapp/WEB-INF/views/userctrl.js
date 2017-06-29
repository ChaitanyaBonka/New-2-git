app.controller('userctrl', [ '$scope', '$http','$rootScope','$cookieStore', function($scope, $http,$rootScope,$cookieStore) {
	var BASE_URL = 'http://localhost:8089/ChatusBackend';
	
	$scope.submit = function() {
		
		$scope.users = {	
			
			empid : $scope.empid,
			empname:$scope.empname,
			department:$scope.department,
			startdate : $scope.startdate,
			enddate:$scope.enddate,
			reason:$scope.reason,
			
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.empid='';
			$scope.empname='';
			$scope.department='';
			$scope.startdate='';
			$scope.enddate='';
			$scope.reason='';
			
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
	$scope.currentuser=function(){
		
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser'
		}).success(function(data,status,headers,config){
			$scope.oneuser=data;
		})
	};
	   
}]);