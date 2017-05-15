angular.module('sunApp').controller('alreadyController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    $scope.load = function(){
        // var formData = {
        //     type: $location.search().id
        // };
        $http({
            method:'POST',
            url: api_Data.My.getReadyCar,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(function successCallback(response){
            if(response.data.code == 0){
                $scope.formData = response.data.obj;
            }else{
                $scope.formData = response.data.obj;
            }
        }, function errorCallback(response) {
            console.error('ajax失败');    
        });
    }
    $scope.look = function(description){
        alert(description);
    }
});