<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

//admin
class UserAdminController extends UserGlobalController
{
    public function getUserMember()
    {
        $all_user_info = DB::select("SELECT id,account, name, email, phone, address, (Select name from roles where id = role_id) as role, active FROM members where role_id < 2");
        // dd($all_user_info);
        return response()->json(['status' => 200,'msg'=>'成功取得會員', 'all_user_info' => $all_user_info]);
    }
    public function createUserMember(CreateUserRequest $request)
    {
        $account = $request->account;
        if (parent::checkAccountExist($account)) {
            return response()->json(['status' => 200, 'msg' => '帳號已被註冊']);
        };
        $email = $request->email;
        $password = $request->password;
        $name = $request->name;
        $address = $request->address;
        $phone = $request->phone;
        $datetime = parent::get_datetime();
        DB::table('members')->insert([
            'account' => $account,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'name' => $name,
            'phone' => $phone,
            'address' => $address,
            "role_id" => 1,
            'created_at' => $datetime,
            'updated_at' => $datetime,
        ]);
        return response()->json(['status' => 200, 'msg' => '成功新增會員']);
    }
    public function updateUserMember(UpdateUserRequest $request)
    {

        $id = $request->id;
        $account = $request->account;
        $email = $request->email;
        $name = $request->name ? $request->name : null;
        $phone = $request->phone ? $request->phone : null;
        $address = $request->address ? $request->address : null;
        $active = $request->active ? $request->active : 1;
        if (parent::checkAccountExist($account)) {
            return response()->json(['status' => 400, 'msg' => '帳號已被註冊']);
        }
        DB::table('members')->where('id', $id)->update([
            'name' => $name,
            'phone' => $phone,
            'account' => $account,
            'email' => $email,
            'address' => $address,
            'active' => $active,
            'updated_at' => parent::get_datetime(),
        ]);
        return response()->json(['status' => 200, 'msg' => '更改資料成功']);
    }
}
