<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\GlobalController;
use App\Http\Controllers\MailController;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\ForgetPasswordRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Mail\MailForgetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class UserMemberController extends GlobalController
{
    public function __construct()
    {
        date_default_timezone_set('Asia/Taipei');
    }
    public function getOwnProfile(Request $request)
    {
        // dd();
        $account = $request->user_info->account;
        $data = $this->get_own_profile($account);
        return response()->json(array_merge(['status' => 200], $data));
    }
    public function get_own_profile($account)
    {
        $token = parent::get_token($account);
        DB::table('members')->where('account', $account)->update(['token' => $token, 'updated_at' => parent::get_datetime()]);
        $user_info = $this->get_user_info($account);
        return ['user_info' => $user_info, 'token' => $token];
    }
    public function get_user_info($account)
    {
        $user_info = DB::table('members')->select('id', 'name', 'account', 'email', 'phone', 'address', 'role_id')->where('account', $account)->first();
        return $user_info;
    }
    public function updateOwnProfile(UpdateUserRequest $request)
    {
        $id = $request->id;
        $account = $request->account;
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $address = $request->address;

        DB::table('members')->where('id', $id)->update([
            'name' => $name,
            'phone' => $phone,
            'account' => $account,
            'email' => $email,
            'address' => $address,
        ]);
        return response()->json(['status' => 200, 'msg' => '更改資料成功']);
        // return response()->json(['status' => 'success', 'status_obj' => ['更改資料成功!!!']]);
    }
    /* 登入 */
    public function userLogin(Request $request)
    {
        // dd($request->all());
        $account = $request->account;
        $password = $request->password;
        $user = DB::table('members')->where([['account', $account], ['status', 1]])->first();
        if (!$user || !password_verify($password, $user->password)) {
            // return response()->json(['status' => 'api_error', 'status_obj' => ['無效的登陸名或密碼']]);
            return response()->json(['status' => 400, 'msg' => '無效的登陸名或密碼']);
        }
        $data = $this->get_own_profile($account);
        return response()->json(array_merge(['status' => 200, 'msg' => '登入成功'], $data));
    }
    public function userRegister(CreateUserRequest $request)
    {
        $account = $request->account;
        $email = $request->email;
        $password = $request->password;
        $token = parent::get_token($account);
        $datetime = parent::get_datetime();
        DB::table('members')->insert([
            'account' => $account,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'token' => $token,
            'created_at' => $datetime,
            'updated_at' => $datetime,
        ]);
        $user_info = $this->get_user_info($account);
        return response()->json(['status' => 200, 'msg' => '註冊成功', 'token' => $token, 'user_info' => $user_info]);
    }
    public function userLogout(Request $request)
    {
        $account = $request->user_info->account;
        DB::table('members')->where('account', $account)->update(['token' => NULL]);
        return response()->json(['status' => 200]);
    }
    public function updatePassword(Request $request)
    {
        // dd($request->all());
        $user_id = $request->user_info->id;
        $password = DB::table("members")->select("password")->where("id", $user_id)->first()->password;
        $old_password = $request->old_password;
        if (!password_verify($old_password, $password)) {
            return response()->json(["status" => 400, "msg" => "密碼錯誤"]);
        }
        $new_password =  $request->new_password;
        DB::table("members")->where("id", $user_id)->update([
            "password" => password_hash($new_password, PASSWORD_DEFAULT)
        ]);
        return response()->json(["status" => 200, "msg" => "成功更改密碼"]);
    }

    public function forgetPassword(ForgetPasswordRequest $request)
    {
        $mail = new MailController();
        $data = $request->all();
        $step = $data["step"];
        $email = $data["email"];

        $user = DB::table("members")->where("email", $email)->first();
        if (!$user)
            return response()->json(["status" => 400, "msg" => "電子郵件尚未註冊"]);

        switch ($step) {
            case 1:
                $mailCheck = $mail->sendMail(1, $email, $user->name, $user->id);
                return response()->json(["status" => $mailCheck[0], "msg" => $mailCheck[1]]);
            case 2:
                $code = $data["code"];
                $mail_log = DB::table("mail_log")->where([["code", $code], ["email", $email]])->first();
                if ($mail_log) {
                    //超過15分鐘
                    if (strtotime("now") - strtotime($mail_log->send_time) > 60 * 15)
                        return response()->json(["status" => 400, "msg" => "驗證碼已過期"]);
                    //驗證成功
                    DB::table("mail_log")->where([["code", $code], ["email", $email]])->update([
                        "auth" => 1
                    ]);
                    return response()->json(["status" => 200, "msg" => "驗證成功"]);
                } else //驗證碼錯誤
                    return response()->json(["status" => 400, "msg" => "驗證錯誤"]);
            case 3:
                $password = $data["password"];
                DB::table("members")->where("email", $email)->update([
                    "password" => password_hash($password, PASSWORD_DEFAULT)
                ]);
                return response()->json(["status" => 200, "msg" => "更新密碼成功"]);
            default:
                return response()->json(["status" => 400, "msg" => "錯誤"]);
        }
    }



    public function upLoadBase64Img(Request $request)
    {
        $img = $request->img_base64;
        $data = explode(',', $img);
        // dd()
        $fp = fopen('./pictures/sign.png', 'wb');
        fwrite($fp, base64_decode($data[1]));
        fclose($fp);
    }
}
