<?php
namespace Home\Controller;

use Think\Controller;

class CarController extends Controller{

    public function get(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        $service = $cars->where("userid='$id'")->select();

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

    public function getRepair(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        $status = '0';
        $service = $cars->where("userid='$id' AND status='$status'")->select();

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

    public function setRepair(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        $carid = $_POST['carid'];
        $status = $_POST['status'];
        $type = $_POST['type'];
        $apply = $_POST['apply'];

        $data['status'] = $status;
        $data['type'] = $type;
        $data['apply'] = $apply;
        dump($type[0]);
        $service = $cars->where("id='$carid'")->setField($data);

        if($service){
            $result = array(
                'code'=> '0',
                'obj' => $service
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
              $result = array(
                  'code'=> '1',
                  'errMsg'=> '切换失败'
              );
              echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    public function severSetRepair(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        $carid = $_POST['carid'];
        $status = $_POST['status'];
        $data['severid'] = $id;
        $data['status'] = $status;
        $service = $cars->where("id='$carid'")->setField($data);

        if($service){
            $result = array(
                'code'=> '0',
                'obj' => $service
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
              $result = array(
                  'code'=> '1',
                  'errMsg'=> '切换失败'
              );
              echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    public function getNo(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        // $status = '3';
        $service = $cars->where("userid='$id' AND (status=1 OR status=2 OR status=4 OR status=5)")->select();

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

    public function getNoCar(){
        $cars = D('cars');
        $status1 = '1';
        $status2 = '4';
        $service = $cars->where("status='$status1' OR status='$status2'")->select();

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

    public function getIngCar(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        $status1 = '2';
        $status2 = '5';
        $service = $cars->where("severid='$id' AND (status='$status1' OR status='$status2')")->select();

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

    public function getReady(){
        $cars = D('cars');
        $id = $_SESSION['user_id'];
        $status1 = '3';
        $status2 = '6';
        $service = $cars->where("userid='$id' AND (status='$status1' OR status='$status2')")->select();

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

    public function severGetForm(){
        $cars = D('cars');
        $id = $_POST['id'];
        $service = $cars->where("id='$id'")->find();

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

    public function severSetForm(){
        $cars = D('cars');
        $id = $_POST['id'];
        $jianyanyuan = $_POST['jianyanyuan'];
        $lingjian = $_POST['lingjian'];
        $weixiu = $_POST['weixiu'];
        $description = $_POST['description'];
        $status = $_POST['status'];

        $data['jianyanyuan'] = $jianyanyuan;
        $data['lingjian'] = $lingjian;
        $data['weixiu'] = $weixiu;
        $data['description'] = $description;
        $data['status'] = $status;
        $service = $cars->where("id='$id'")->setField($data);

        if($service){
            $result = array(
                'code'=> '0',
                'obj' => $service
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
              $result = array(
                  'code'=> '1',
                  'errMsg'=> '保存成功'
              );
              echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    public function getComment(){
        $cars = D('cars');
        $id = $_POST['id'];
        // $status = '3';
        $service = $cars->where("id='$id'")->find();

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

    public function setComment(){
        $cars = D('cars');
        $id = $_POST['id'];
        $comment = $_POST['comment'];
        $service = $cars->where("id='$id'")->setField('comment',$comment);

        if($service){
            $result = array(
                'code'=> '0',
                'obj' => $service
            );
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
              $result = array(
                  'code'=> '1',
                  'errMsg'=> '保存失败'
              );
              echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    public function add(){
        $chepaihao = $_POST['chepaihao'];
        $xinghao = $_POST['xinghao'];
        $pinpai = $_POST['pinpai'];
        $chandi = $_POST['chandi'];
        $date = $_POST['date'];
        $id = $_SESSION['user_id'];

        $dat = str_replace("T16:00:00.000Z","",$date);

        $cars = D('cars');

        $data['chepaihao'] = $chepaihao;
        $data['xinghao'] = $xinghao;
        $data['pinpai'] = $pinpai;
        $data['chandi'] = $chandi;
        $data['date'] = $dat;
        $data['userid'] = $id;
        $data['status'] = 0;

        if($cars->create($data)){
            $id = $cars->add();
            if($id){
                $result = array(
                    'code'=> '0',
                    'ext'=> '提交成功！'
                );
                echo json_encode($result);
            }
        }else{
              $result = array(
                  'code'=> '1',
                  'errMsg'=> '提交失败'
              );
              echo json_encode($result);
        }
    }

}