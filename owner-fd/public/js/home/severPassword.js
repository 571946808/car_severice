angular.module('sunApp').controller('severPasswordController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    $scope.submit = function(){
        var param = {
            password: $scope.password1
        };
        $http({
            method: 'POST',
            // url: 'mock/common.json',
            url: api_Data.My.resetPassword,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer(param)
        }).then(function successCallback(response){
            if(response.data.code == 0){
                layer.open({
                    content: '修改成功',
                    skin: 'msg',
                    time: 2 
                });
                $state.go('home');
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