<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller as BaseController;

class AdminController extends BaseController
{
    public function getAllUserInfo()
    {
        $all_user_info = DB::table('members')->select('id', 'account', 'name', 'email', 'phone', 'address','enable')->get();
        return response()->json($all_user_info);
    }
    public function createUser(Request $request)
    {
        // $validate = $request->validate([
        //     'account'=>['required','max:20'],
        //     'email'=>['required','max:20'],
        //     'password'=>['required','max:20'],
        //     'name'=>['max:20'],
        //     'address'=>['max:20'],
        //     'phone'=>['max:20'],
        // ]);
        $account = $request->account;
        if (in_array($account, DB::table('members')->pluck('account')->toArray())) {
            return response()->json(['status' => 'api_error', 'status_obj' => ['帳號已被註冊']]);
        }
        $email = $request->email;
        $password = $request->password;
        $name = $request->name;
        $address = $request->address;
        $phone = $request->phone;
        DB::table('members')->insert([
            'account' => $account,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'name' => $name,
            'phone' => $phone,
            'address'=>$address
        ]);
        return response()->json(['status' => 200, 'msg'=>'成功新增會員']);
    }
}
