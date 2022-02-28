<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller as BaseController;

class LoginController extends BaseController
{
    public function getUserInfo()
    {
        // dd(['user_info' => $this->get_user_info()]);
        return response()->json($this->get_user_info());
    }
    public function get_user_info()
    {
        $user = session('user');
        $user_info = DB::table('members')->select('id', 'name', 'account', 'email', 'phone', 'address')->where('account', $user)->first();
        return $user_info;
    }
    public function saveUserInfo(Request $request)
    {
        $id = $request->id;
        $name = $request->name;
        $phone = $request->phone;
        $account = $request->account;
        $email = $request->email;
        $address = $request->address;
        if (session('user') !== $account) {
            if ($this->checkAccountExist($account)) {
                // return response()->json(['status' => 'api_error', 'status_obj'=>["帳號已被註冊!!!"]]);
                return response()->json(['status' => 400, 'msg'=>'帳號已被註冊']);
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
        ]);
        return response()->json(['status' => 200, 'msg'=>'更改資料成功']);
        // return response()->json(['status' => 'success', 'status_obj' => ['更改資料成功!!!']]);
    }
    public function getUser()
    {
        if (!session('user')) {
            $user = Cookie::get('user');
            if ($user) {
                $user_data = DB::table('members')->where('account', $user)->first();
                if (Cookie::get('token') === $user_data->token) {
                    session(['user' => Cookie::get('user')]);
                }
            }
        }
        return response()->json(['user' => session('user')]);
    }
    // public function getCsrfToken()
    // {
    //     return response()->json(['csrf_token'=>csrf_token()]);
    // }
    public function userLogin(Request $request)
    {
        // dd($request->all());
        $account = $request->account;
        $password = $request->password;
        $user = DB::table('members')->where('account', $account)->first();
        if (!$user || !password_verify($password, $user->password)) {
            // return response()->json(['status' => 'api_error', 'status_obj' => ['無效的登陸名或密碼']]);
            return response()->json(['status' => 400, 'msg'=>'無效的登陸名或密碼']);
        }
        // dd(session());
        if ($request->remember) {
            if (!$user->token) {
                $token = Str::random(100);
                DB::table('members')->where('account', $account)->update(['token' => $token]);
            } else {
                $token = $user->token;
            }

            Cookie::queue('user', $account, 43200);
            Cookie::queue('token', $token, 43200);
        }
        session(['user' => $account]);
        return response()->json(['status' => 200, 'msg'=>'登入成功']);
    }
    public function userRegister(Request $request)
    {
        $account = $request->account;
        $email = $request->email;
        $password = $request->password;
        if ($this->checkAccountExist($account)) {
            // return response()->json(['status' => 'api_error', 'status_obj' => ['帳號已被註冊']]);
            return response()->json(['status' => 400, 'msg'=>'帳號已被註冊']);
        }
        if ($request->remember) {
            $token = Str::random(100);
            DB::table('members')->insert([
                'account' => $account,
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
                'token' => $token
            ]);

            Cookie::queue('user', $account, 43200);
            Cookie::queue('token', $token, 43200);
        } else {
            DB::table('members')->insert([
                'account' => $account,
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
            ]);
        }
        session(['user' => $account]);
        return response()->json(['status' => 200, 'msg'=>'註冊成功']);
    }
    public function userLogout(Request $request)
    {
        $user = session('user');
        $request->session()->forget('user');
        Cookie::queue(Cookie::forget('user'));
        Cookie::queue(Cookie::forget('token'));
        DB::table('members')->where('account', $user)->update(['token' => NULL]);
        return response()->json(['status' => 200, 'msg'=>'登出成功']);
    }
    public function checkAccountExist($account)
    {
        return in_array($account, DB::table('members')->pluck('account')->toArray());
    }
    public function upLoadBase64Img(Request $request)
    {
        $img = $request->img_base64;
        $data = explode( ',', $img );
        // dd()
        $fp = fopen('./pictures/sign.png','wb');
        fwrite($fp,base64_decode($data[1]));
        fclose( $fp );
    }
}
