angular.module('todoApp',[])
	.controller("MainController",["$scope" ,function($scope){
		$scope.head = "My First App";
		$scope.item = "";
		$scope.status="";
		$scope.items = [];

		$scope.addToList = function(){
			console.log("adad");
			$scope.items.push({"name" : $scope.item, "status" : $scope.status});
			$scope.item = "";
			$scope.status="";
		};

		$scope.delete = function(index){
			$scope.items.splice(index,1);
		};

	}])

	.filter('done', function(){
		return function(x){
			var d = [];
			for( var i = 0; i < x.length; i++){
				if(x[i].status == true)
					d.push(x[i]);
			}
			return d;
		}
	})

	.filter('notdone', function(){
		return function(x){
			var d = [];
			for( var i = 0; i < x.length; i++){
				if(x[i].status == false)
					d.push(x[i]);
			}
			return d;
		}
	})
	;

