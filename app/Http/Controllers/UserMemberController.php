<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;

class UserMemberController extends UserGlobalController
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
    public function updateUser(UpdateUserRequest $request)
    {
        $id = $request->id;
        $account = $request->account;
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $address = $request->address;
        $enable = $request->enable;

        if (session('user') !== $account) {
            if (parent::checkAccountExist($account)) {
                // return response()->json(['status' => 'api_error', 'status_obj'=>["帳號已被註冊!!!"]]);
                return response()->json(['status' => 400, 'msg' => '帳號已被註冊']);
            }
            Cookie::queue('user', $account, 43200);
            session(['user' => $account]);
        }
        DB::table('members')->where('id', $id)->update([
            'name' => $name,
            'phone' => $phone,
            'account' => $account,
            'email' => $email,
            'address' => $address,
            'enable' => $enable
        ]);
        return response()->json(['status' => 200, 'msg' => '更改資料成功']);
        // return response()->json(['status' => 'success', 'status_obj' => ['更改資料成功!!!']]);
    }

    public function userLogin(Request $request)
    {
        // dd($request->all());
        $account = $request->account;
        $password = $request->password;
        $user = DB::table('members')->where('account', $account)->first();
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
        if (parent::checkAccountExist($account)) {
            // return response()->json(['status' => 'api_error', 'status_obj' => ['帳號已被註冊']]);
            return response()->json(['status' => 400, 'msg' => '帳號已被註冊']);
        }
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
        return response()->json(['status' => 200, 'msg' => '登出成功']);
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
