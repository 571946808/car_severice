angular.module('sunApp').controller('severProcessController', function ($scope,$rootScope,$http,$httpParamSerializer,$state,$location) { 
    $scope.load = function(){
        var formData = {
            id: $location.search().id
        };
        $http({
            method:'POST',
            url: api_Data.My.severGetForm,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer(formData)
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

    $scope.submit = function(){
        var formData = {
            jianyanyuan: $scope.formData.jianyanyuan,
            lingjian: $scope.formData.lingjian,
            weixiu: $scope.formData.weixiu,
            description: $scope.formData.description,
            status: $scope.formData.status,
            id: $location.search().id
        };
        $http({
            method: 'POST',
            // url: 'mock/common.json',
            url: api_Data.My.severSetForm,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer(formData)
        }).then(function successCallback(response){
            if(response.data.code == 0){
                layer.open({
                    content: '修改成功',
                    skin: 'msg',
                    time: 2 
                });
                $state.go('severIng');
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