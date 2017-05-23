angular.module('sunApp').controller('severNoController', function ($scope,$rootScope,$http,$httpParamSerializer,$state) { 
    $scope.load = function(){
        // var formData = {
        //     type: $location.search().id
        // };
        $http({
            method:'POST',
            url: api_Data.My.getNoCar,
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
    $scope.repair = function(id,item){
        var r=confirm("确定进行维修吗？")
        if (r == true){
            var param = {
                carid: id,
                status: item
            }
            $http({
                method:'POST',
                url: api_Data.My.severSetRepairCar,
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
                    $state.go('severIng');
                }else{
                    layer.open({
                        content: '切换失败，请重新操作',
                        skin: 'msg',
                        time: 2 
                    });
                }
            }, function errorCallback(response) {
                console.error('ajax失败');    
            });
        }
    }
    $scope.look = function(type, apply){
        alert('服务项目：'+type+ '\n' + '服务详情：' +apply)
    }
});