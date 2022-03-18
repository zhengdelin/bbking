<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

//admin
class UserAdminController extends GlobalController
{
    public function getUserMember()
    {
        $all_user_info = DB::select("SELECT id,account, name, email, phone, address, (Select name from roles where id = role_id) as role, status FROM members where role_id < 2");
        // dd($all_user_info);
        return response()->json(['status' => 200, 'all_user_info' => $all_user_info]);
    }
    public function createUserMember(CreateUserRequest $request)
    {
        $account = $request->account;
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
        $name = $request->name;
        $phone = $request->phone;
        $address = $request->address;
        $status = $request->status;
        DB::table('members')->where('id', $id)->update([
            'name' => $name,
            'phone' => $phone,
            'account' => $account,
            'email' => $email,
            'address' => $address,
            'status' => $status,
            'updated_at' => parent::get_datetime(),
        ]);
        return response()->json(['status' => 200, 'msg' => '更改資料成功']);
    }
}
