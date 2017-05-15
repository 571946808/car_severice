var sunApp = angular.module('sunApp',['ui.router','oc.lazyLoad']);
sunApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: true
    });
}]);
sunApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);
sunApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('','/home');

    $stateProvider.state('home',{
        url:'/home',
        templateUrl: 'views/home/home.html',
        controller: 'homeHomeController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'homeHomeController',
                    files:[
                        'public/js/home/home.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/css/home/home.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('addCars',{
        url:'/addCars',
        templateUrl: 'views/home/addCars.html',
        controller: 'addCarsController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'addCarsController',
                    files:[
                        'public/js/home/addCars.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/addCars.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('carsList',{
        url:'/carsList',
        templateUrl: 'views/home/carsList.html',
        controller: 'carsListController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'carsListController',
                    files:[
                        'public/js/home/carsList.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/carsList.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('no',{
        url:'/no',
        templateUrl: 'views/home/no.html',
        controller: 'noController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'noController',
                    files:[
                        'public/js/home/no.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/no.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('already',{
        url:'/already',
        templateUrl: 'views/home/already.html',
        controller: 'alreadyController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'alreadyController',
                    files:[
                        'public/js/home/already.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/already.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('repair',{
        url:'/repair',
        templateUrl: 'views/home/repair.html',
        controller: 'repairController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'repairController',
                    files:[
                        'public/js/home/repair.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/repair.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('person',{
        url:'/person',
        templateUrl: 'views/home/person.html',
        controller: 'personController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'personController',
                    files:[
                        'public/js/home/person.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/person.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('password',{
        url:'/password',
        templateUrl: 'views/home/password.html',
        controller: 'passwordController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'passwordController',
                    files:[
                        'public/js/home/password.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/password.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('check',{
        url:'/check',
        templateUrl: 'views/home/check.html',
        controller: 'checkController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'checkController',
                    files:[
                        'public/js/home/check.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/check.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('sever',{
        url:'/sever',
        templateUrl: 'views/home/sever.html',
        controller: 'severController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'severController',
                    files:[
                        'public/js/home/sever.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/sever.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('severAlready',{
        url:'/severAlready',
        templateUrl: 'views/home/severAlready.html',
        controller: 'severAlreadyController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'severAlreadyController',
                    files:[
                        'public/js/home/severAlready.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/severAlready.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('severPassword',{
        url:'/severPassword',
        templateUrl: 'views/home/severPassword.html',
        controller: 'severPasswordController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'severPasswordController',
                    files:[
                        'public/js/home/severPassword.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/severPassword.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('severNo',{
        url:'/severNo',
        templateUrl: 'views/home/severNo.html',
        controller: 'severNoController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'severNoController',
                    files:[
                        'public/js/home/severNo.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/severNo.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('severIng',{
        url:'/severIng',
        templateUrl: 'views/home/severIng.html',
        controller: 'severIngController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'severIngController',
                    files:[
                        'public/js/home/severIng.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/severIng.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('severProcess',{
        url:'/severProcess',
        templateUrl: 'views/home/severProcess.html',
        controller: 'severProcessController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'severProcessController',
                    files:[
                        'public/js/home/severProcess.js',
                        'public/libs/jquery/jquery.js',
                        'public/libs/bootstrap/css/bootstrap.css',
                        'public/libs/bootstrap/bootstrap.js',
                        'public/css/home/severProcess.css',                        
                        'public/css/home/menu.css',
                        'public/js/home/menu.js',
                        'public/css/home/addCars.css'
                    ]
                })
            }]
         }
    });

    $stateProvider.state('neighbor',{
        url:'/neighbor',
        templateUrl:'views/neighbor/home.html',
        controller: 'neighborHomeController',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'neighborHomeController',
                    files:[
                        'public/js/neighbor/home.js',
                        'public/css/neighbor/home.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('send',{
        url:'/send',
        templateUrl:'views/neighbor/send.html',
        controller: 'sendController',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'sendController',
                    files:[
                        'public/js/neighbor/send.js',
                        'public/css/neighbor/send.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('report',{
        url: '/report',
        templateUrl: 'views/report/home.html',
        controller: 'reportHomeController',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'reportHomeController',
                    files:[
                        'public/js/report/home.js',
                        'public/css/report/report.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('reportgzh',{
        url: '/reportgzh',
        templateUrl: 'views/report/report-gzh.html',
        controller: 'reportGzhController',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'reportGzhController',
                    files:[
                        'public/js/report/report-gzh.js',
                        'public/css/report/report-gzh.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('reportwy',{
        url: '/reportwy',
        templateUrl: 'views/report/report-wy.html',
        controller: 'reportWyController',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'reportWyController',
                    files:[
                        'public/js/report/report-wy.js',
                        'public/css/report/report-gzh.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('my',{
        url: '/my',
        templateUrl: 'views/my/home.html',
        controller: 'myHomeController',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'myHomeController',
                     files:[
                        'public/css/my/home.css',
                        'public/js/my/home.js',
                        'public/js/partial/footer.js'
                    ]
                })
            }
        }
    });

    $stateProvider.state('reset', {
        url: '/reset',
        templateUrl: 'views/my/reset.html',
        controller: 'resetController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'resetController',
                    files:[
                        'public/js/my/reset.js',
                        'public/css/my/reset.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'views/my/contact.html',
        controller: 'contactController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'contactController',
                    files:[
                        'public/js/my/contact.js',
                        'public/css/my/contact.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('messageList', {
        url: '/messageList',
        templateUrl: 'views/my/messageList.html',
        controller: 'messageListController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'messageListController',
                    files:[
                        'public/js/my/messageList.js',
                        'public/css/my/messageList.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'views/my/login.html',
        controller: 'myLoginController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'myLoginController',
                    files:[
                        'public/js/my/login.js',
                        'public/css/my/login.css'
                    ]
                })
            }
        }
    });
    $stateProvider.state('findPassword', {
        url: '/findPassword',
        templateUrl: 'views/my/find-password.html',
        controller: 'passwordController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'passwordController',
                    files:[
                        'public/js/my/find-password.js',
                        'public/css/my/find-password.css'
                    ]
                })
            }
        }
    });
    $stateProvider.state('authenticationAdd', {
        url: '/authenticationAdd',
        templateUrl: 'views/my/authentication-add.html',
        controller: 'myAuthenticationAdd',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'myAuthenticationAdd',
                    files:[
                        'public/js/my/authentication-add.js',
                        'public/css/my/authentication.css',
                        'public/libs/iosselect/merge/iosSelect.js',
                        'public/libs/iosselect/merge/iosSelect.css',
                        'public/libs/iosselect/merge/areaData_v2.js'
                    ]
                })
            }
        }
    });

    $stateProvider.state('renzheng', {
        url: '/renzheng',
        templateUrl: 'views/my/renzheng.html',
        controller: 'renzhengController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'renzhengController',
                    files:[
                        'public/js/my/renzheng.js',
                        'public/css/my/authentication.css',
                        'public/libs/iosselect/merge/iosSelect.js',
                        'public/libs/iosselect/merge/iosSelect.css',
                        'public/libs/iosselect/merge/areaData_v2.js'
                    ]
                })
            }
        }
    });
    $stateProvider.state('authenticationEdit', {
        url: '/authenticationEdit/:id',
        templateUrl: 'views/my/authentication-edit.html',
        controller: 'myAuthenticationEdit',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'myAuthenticationEdit',
                    files:[
                        'public/js/my/authentication-edit.js',
                        'public/css/my/authentication.css',
                        'public/libs/iosselect/merge/iosSelect.js',
                        'public/libs/iosselect/merge/iosSelect.css',
                        'public/libs/iosselect/merge/areaData_v2.js'
                    ]
                })
            }
        }
    });
    $stateProvider.state('authenticationList', {
        url: '/authenticationList',
        templateUrl: 'views/my/authentication-List.html',
        controller: 'myAuthenticationList',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'myLoginController',
                    files:[
                        'public/js/my/authentication-list.js',
                        'public/css/my/authentication.css'
                    ]
                })
            }
        }
    });

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'views/my/register.html',
        controller: 'registerController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'registerController',
                    files:[
                        'public/js/my/register.js',
                        'public/css/my/register.css'
                    ]
                })
            }
        }
    });

    //缴费
    $stateProvider.state('money', {
        url: '/money',
        templateUrl: 'views/maintain/money.html',
        controller: 'moneyController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'moneyController',
                    files:[
                        'public/js/maintain/money.js',
                        'public/css/maintain/money.css'
                    ]
                })
            }
        }
    });

    //缴费
    $stateProvider.state('saomiao', {
        url: '/saomiao',
        templateUrl: 'views/maintain/saomiao.html',
        controller: 'saomiaoController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'saomiaoController',
                    files:[
                        'public/js/maintain/saomiao.js',
                        'public/css/maintain/saomiao.css'
                    ]
                })
            }
        }
    });

    //缴费详情
    $stateProvider.state('moneyDetail', {
        url: '/moneyDetail',
        templateUrl: 'views/maintain/moneyDetail.html',
        controller: 'moneyDetailController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'moneyDetailController',
                    files:[
                        'public/js/maintain/moneyDetail.js',
                        'public/css/maintain/moneyDetail.css'
                    ]
                })
            }
        }
    });

    //缴费反馈
    $stateProvider.state('fankui', {
        url: '/fankui',
        templateUrl: 'views/maintain/fankui.html',
        controller: 'fankuiController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'fankuiController',
                    files:[
                        'public/js/maintain/fankui.js',
                        'public/css/maintain/fankui.css'
                    ]
                })
            }
        }
    });

    //缴费列表
    $stateProvider.state('moneyList', {
        url: '/moneyList',
        templateUrl: 'views/maintain/moneyList.html',
        controller: 'moneyListController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'moneyListController',
                    files:[
                        'public/js/maintain/moneyList.js',
                        'public/css/maintain/moneyList.css'
                    ]
                })
            }
        }
    });

    //维修报修
    $stateProvider.state('maintain', {
        url: '/maintain',
        templateUrl: 'views/maintain/maintain.html',
        controller: 'maintain',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'maintain',
                    files:[
                        'public/js/maintain/maintain.js',
                        'public/css/maintain/maintain.css',
                        'public/libs/calendar/dist/css/LCalendar.min.css',
                        'public/libs/calendar/dist/js/LCalendar.min.js'
                    ]
                })
            }
        }
    });
    //维修报修--家庭
    $stateProvider.state('homeMaintain', {
        url: '/homeMaintain',
        templateUrl: 'views/maintain/home-maintain.html',
        controller: 'homeMaintainCtrl',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'maintainController',
                    files:[
                        'public/js/maintain/home-maintain.js',
                        'public/css/maintain/home-maintain.css',
                        'public/libs/calendar/dist/css/LCalendar.min.css',
                        'public/libs/calendar/dist/js/LCalendar.min.js'
                    ]
                })
            }
        }
    });
    //维修报修--公共
    $stateProvider.state('publicMaintain', {
        url: '/publicMaintain',
        templateUrl: 'views/maintain/public-maintain.html',
        controller: 'publicMaintainCtrl',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'publicMaintainCtrl',
                    files:[
                        'public/js/maintain/public-maintain.js',
                        'public/css/maintain/public-maintain.css'
                    ]
                })
            }
        }
    });

    //访客授权
    $stateProvider.state('visit', {
        url: '/visit',
        templateUrl: 'views/maintain/visit.html',
        controller: 'visitController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'visitController',
                    files:[
                        'public/js/maintain/visit.js',
                        'public/css/maintain/visit.css',
                        'public/libs/calendar/dist/css/LCalendar.min.css',
                        'public/libs/calendar/dist/js/LCalendar.min.js'
                    ]
                })
            }
        }
    });

    //访客授权列表
    $stateProvider.state('visitList', {
        url: '/visitList',
        templateUrl: 'views/maintain/visitList.html',
        controller: 'visitListController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'visitListController',
                    files:[
                        'public/js/maintain/visitList.js',
                        'public/css/maintain/visitList.css'
                    ]
                })
            }
        }
    });

    //提交详情
    $stateProvider.state('submitDetail', {
        url: '/submitDetail/:id',
        templateUrl: 'views/maintain/submitDetail.html',
        controller: 'submitDetailController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'submitDetailController',
                    files:[
                        'public/js/maintain/submitDetail.js',
                        'public/css/maintain/submitDetail.css'
                    ]
                })
            }
        }
    });
    //我的提交
    $stateProvider.state('mycommit', {
        url: '/mycommit/:id',
        templateUrl: 'views/maintain/mycommit.html',
        controller: 'mycommitController',
        resolve: {
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'mycommitController',
                    files:[
                        'public/js/maintain/mycommit.js',
                        'public/css/maintain/mycommit.css'
                    ]
                })
            }
        }
    });
});

// sunApp.controller('footerController',function($scope, $rootScope, $location){
//     var url = $location.url();
//     $scope.currentTab = url.substr(1);
//     $scope.changeTab = function(tabname){  
//         $scope.currentTab = tabname;
//     }; 
//     $rootScope.hasHeader = false;
//     $rootScope.hasFooter = true;
// });

