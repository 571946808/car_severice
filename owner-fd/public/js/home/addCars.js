angular.module('sunApp').controller('addCarsController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    $scope.submit = function(){
        $http({
            method: 'POST',
            // url: 'mock/common.json',
            url: api_Data.My.addCar,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer($scope.formData)
        }).then(function successCallback(response){
            if(response.data.code == 0){
                layer.open({
                    content: '添加成功',
                    skin: 'msg',
                    time: 2 
                });
                $state.go('carsList');
            }else{
                layer.open({
                    content: response.data.errMsg,
                    skin: 'msg',
                    time: 2 
                });
            }
        }, function errorCallback(response){
            console.log(response.data);
        });
    }
});