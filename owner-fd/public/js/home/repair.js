angular.module('sunApp').controller('repairController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    $scope.load = function(){
        // var formData = {
        //     type: $location.search().id
        // };
        $http({
            method:'POST',
            url: api_Data.My.getRepairCar,
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
    $scope.repair = function(id, item){
        var ty = $scope.formData.type,
        str = "";
        for (var Key in ty){
            str += ty[Key]+' ';
        }
        var param = {
            carid: id,
            status: item,
            type: str,
            apply: $scope.formData.apply
        };
        $http({
            method:'POST',
            url: api_Data.My.setRepairCar,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: $httpParamSerializer(param)
        }).then(function successCallback(response){
            if(response.data.code == 0){
                layer.open({
                    content: '切换成功',
                    skin: 'msg',
                    time: 2 
                });
                $state.go('no');
            }else{
                layer.open({
                    content: '切换成功!',
                    skin: 'msg',
                    time: 2 
                });
                $state.go('no');
            }
        }, function errorCallback(response) {
            console.error('ajax失败');    
        });
    }
});