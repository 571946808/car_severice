<?php
namespace Home\Controller;

use Think\Controller;

class ResetController extends Controller{

    public function reset(){
        $password = $_POST['password'];
        $id = $_SESSION['user_id'];
        $status = $_SESSION['status'];
        if(!$status){
            $login = D('person');
        }else{
            $login = D('sever');
        }        

        $data = $login->where("id='$id'")->setField('password',$password);

        if($data){
            
            $result = array(
                'code' => '0',
                'ext' => '修改成功！'
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            $result = array(
                'code' => '1',
                'errMsg' => '修改失败！'
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    public function get(){        
        $id = $_SESSION['user_id'];
        $status = $_SESSION['status'];
        if(!$status){
            $person = D('person');
        }else{
            $person = D('sever');
        }
        $service = $person->where("id='$id'")->find();

        if($service){
            $result = array(
                'code'=> '0',
                'obj' => $service
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
              $result = array(
                  'code'=> '1',
                  'errMsg'=> '查询失败'
              );
              echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    public function set(){
        $username = $_POST['username'];
        $name = $_POST['name'];
        $sex = $_POST['sex'];
        $number = $_POST['number'];
        $phone = $_POST['phone'];
        $id = $_SESSION['user_id'];
        $status = $_SESSION['status'];

        if(!$status){
            $login = D('person');
        }else{
            $login = D('sever');
        }   

        $data['username'] = $username;
        $data['name'] = $name;
        $data['sex'] = $sex;
        $data['number'] = $number;
        $data['phone'] = $phone;

        $service = $login->where("id='$id'")->setField($data);

        if($service){
            
            $result = array(
                'code' => '0',
                'ext' => '修改成功！'
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            $result = array(
                'code' => '1',
                'errMsg' => '修改失败！'
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

}