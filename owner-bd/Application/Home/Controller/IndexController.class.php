<?php
namespace Home\Controller;

use Think\Controller;

class IndexController extends Controller{
    //登录页
    public function index()
    {
        echo '欢迎登录！';
        
    }

    public function login(){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $status = $_POST['status'];
        if(!$status){
            $login = D('person');
        }else{
            $login = D('sever');
        }        
        $data = $login->where("username='$username' AND password='$password'")->find();
        if($data){
            $_SESSION['user_id']=$data['id'];
            $_SESSION['status']=$status;
            $result = array(
                'code' => '0',
                'ext' => '登录成功'
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            $result = array(
                'code' => '1',
                'errMsg' => '用户名不存在或者密码错误'
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    //首页
    public function  mange(){
        echo '这里是首页';
    }
}