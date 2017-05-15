angular.module('sunApp').controller('footerController',function($scope, $rootScope, $location){
    //console.log($location.url());
    var url = $location.url();
    $rootScope.currentTab = url.substr(1) || 'home';
    $rootScope.changeTab = function(tabname){  
        $rootScope.currentTab = tabname;
    }; 
});