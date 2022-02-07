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
        return response()->json(['user_info' => $this->get_user_info()]);
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
                return response()->json(['status' => 'error', 'status_object' => ['error' => ['帳號已被註冊!!!']]]);
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
        return response()->json(['status' => 'success', 'status_object' => ['success' => ['更改資料成功!!!']]]);
    }
    public function getUser()
    {
        if (!session('user')) {
            $user = Cookie::get('user');
            if ($user) {
                $user_data = DB::table('members')->where('account', $user)->first();
                if (Cookie::get('remember_token') === $user_data->remember_token) {
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
        $account = $request->account;
        $password = $request->password;
        $user = DB::table('members')->where('account', $account)->first();
        if (!$user || !password_verify($password, $user->password)) {
            return response()->json(['status' => 'error', 'status_object' => ['error' => ['無效的登陸名或密碼']]]);
        }
        // dd(session());
        if ($request->remember) {
            if (!$user->remember_token) {
                $remember_token = Str::random(100);
                DB::table('members')->where('account', $account)->update(['remember_token' => $remember_token]);
            } else {
                $remember_token = $user->remember_token;
            }

            Cookie::queue('user', $account, 43200);
            Cookie::queue('remember_token', $remember_token, 43200);
        }
        session(['user' => $account]);
        return;
    }
    public function userRegister(Request $request)
    {
        $account = $request->account;
        $email = $request->email;
        $password = $request->password;
        if ($this->checkAccountExist($account)) {
            return response()->json(['status' => 'error', 'status_object' => ['error' => ['帳號已被註冊']]]);
        }
        if ($request->remember) {
            $remember_token = Str::random(100);
            DB::table('members')->insert([
                'account' => $account,
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
                'remember_token' => $remember_token
            ]);

            Cookie::queue('user', $account, 43200);
            Cookie::queue('remember_token', $remember_token, 43200);
        } else {
            DB::table('members')->insert([
                'account' => $account,
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
            ]);
        }
        session(['user' => $account]);
        return;
    }
    public function userLogout(Request $request)
    {
        $user = session('user');
        $request->session()->forget('user');
        Cookie::queue(Cookie::forget('user'));
        Cookie::queue(Cookie::forget('remember_token'));
        DB::table('members')->where('account', $user)->update(['remember_token' => NULL]);
        return;
    }
    public function checkAccountExist($account)
    {
        return in_array($account, DB::table('members')->pluck('account')->toArray());
    }
}
