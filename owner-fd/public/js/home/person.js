angular.module('sunApp').controller('personController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    $scope.load = function(){
        // var formData = {
        //     type: $location.search().id
        // };
        $http({
            method:'POST',
            url: api_Data.My.getPerson,
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

    $scope.submit = function(){
        $http({
            method: 'POST',
            // url: 'mock/common.json',
            url: api_Data.My.setPerson,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer($scope.formData)
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