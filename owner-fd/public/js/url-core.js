(function(){
	var 
		site ={
            //website:'http://api.voidking.com', //站点地址
            website: '',
            staticWebsite: '/', // 前端服务器地址
        };

    api_Data={
    	//我是业主
    	My:{
    		//login
    		'login': site.website + '/owner-bd/index.php/Home/Index/login',
            'resetPassword': site.website + '/owner-bd/index.php/Home/Reset/reset',
            'getPerson': site.website + '/owner-bd/index.php/Home/Reset/get',
            'setPerson': site.website + '/owner-bd/index.php/Home/Reset/set',
            'getCar': site.website + '/owner-bd/index.php/Home/Car/get',
            'addCar': site.website + '/owner-bd/index.php/Home/Car/add',
            'getNo': site.website + '/owner-bd/index.php/Home/Car/getNo',
            'getNoCar': site.website + '/owner-bd/index.php/Home/Car/getNoCar',
            'getIngCar': site.website + '/owner-bd/index.php/Home/Car/getIngCar',
            'getReadyCar': site.website + '/owner-bd/index.php/Home/Car/getReady',
            'getRepairCar': site.website + '/owner-bd/index.php/Home/Car/getRepair',
            'setRepairCar': site.website + '/owner-bd/index.php/Home/Car/setRepair',
            'severSetRepairCar': site.website + '/owner-bd/index.php/Home/Car/severSetRepair',
            'severSetForm': site.website + '/owner-bd/index.php/Home/Car/severSetForm',
            'severGetForm': site.website + '/owner-bd/index.php/Home/Car/severGetForm',
            'getComment': site.website + '/owner-bd/index.php/Home/Car/getComment',
            'setComment': site.website + '/owner-bd/index.php/Home/Car/setComment',
    		'messageAdd': site.website + '/owner-bd/index.php/Home/Identify/messageAdd',
    		//authentication-list
    		'messageList': site.website + '/owner-bd/index.php/Home/Identify/messageList',
    		//authentication-edit
    		'messageSkip': site.website + '/owner-bd/index.php/Home/Identify/messageSkip',
    		'messageEdit': site.website + '/owner-bd/index.php/Home/Identify/messageEdit',
    		//register
    		'mobileVerify': site.website + '/owner-bd/index.php/Home/Register/mobileVerify',
    		'checkPicCode': site.website + '/owner-bd/index.php/Home/CheckCode/checkPicCode',
    		'getSMSCode': site.website + '/owner-bd/index.php/Home/SMS/getSMSCode',
    		'checkSMSCode': site.website + '/owner-bd/index.php/Home/SMS/checkSMSCode',
    		'getPicCode': site.website + '/owner-bd/index.php/Home/CheckCode/getPicCode',
    		'register': site.website + '/owner-bd/index.php/Home/Register/register'
            
    	}
    }
})();