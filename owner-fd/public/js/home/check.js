angular.module('sunApp').controller('checkController', function ($scope,$rootScope,$http,$httpParamSerializer,$state,$location) { 
    $scope.load = function(){
        var formData = {
            id: $location.search().id
        };
        $http({
            method:'POST',
            url: api_Data.My.getComment,
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
        var param = {
            id: $location.search().id,
            comment: $scope.formData.comment
        };
        $http({
            method: 'POST',
            // url: 'mock/common.json',
            url: api_Data.My.setComment,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer(param)
        }).then(function successCallback(response){
            if(response.data.code == 0){
                layer.open({
                    content: '保存成功',
                    skin: 'msg',
                    time: 2 
                });
                $state.go('already');
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