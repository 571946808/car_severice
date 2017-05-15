angular.module('sunApp').controller('homeHomeController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    
    $scope.submit = function(){
        var param = {
            username: $scope.username,
            password: $scope.password,
            status: $scope.status
        };
        $http({
            method: 'POST',
            // url: 'mock/common.json',
            url: api_Data.My.login,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer(param)
        }).then(function successCallback(response){
            if(response.data.code == 0){
                layer.open({
                    content: '登录成功',
                    skin: 'msg',
                    time: 2 
                });
                if(!$scope.status){
                    $state.go('person');
                }else{
                    $state.go('sever');
                }                
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