<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\GlobalController;

use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

//admin
class UserAdminController extends GlobalController
{
    public function getRoles()
    {
        $roles = DB::table("roles")->select("id", "name")->where("id", "<", "3")->get();
        return response()->json(['status' => 200, 'roles' => $roles]);
    }
    public function getUserMember(Request $request)
    {
        // dd($request->all());
        $role = $request->user_info->role_id;
        if ($role == 3)
            $all_user_info = DB::select("SELECT id,account, name, email, phone, address, role_id, (Select name from roles where id = role_id) as role, status FROM members where role_id < 3 order by id");
        else
            $all_user_info = DB::select("SELECT id,account, name, email, phone, address, (Select name from roles where id = role_id) as role, status FROM members where role_id < 2 order by id");
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
        $status = $request->status;
        $datetime = parent::get_datetime();

        $role_id = 1;
        //boss才能更改身分
        $role = $request->user_info->role_id;
        if ($role == 3)
            $role_id = $request->role_id;
        DB::table('members')->insert([
            'account' => $account,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'name' => $name,
            'phone' => $phone,
            'address' => $address,
            'status' => $status,
            "role_id" => $role_id,
            'created_at' => $datetime,
            'updated_at' => $datetime,
        ]);
        return response()->json(['status' => 200, 'msg' => '成功新增會員']);
    }
    public function updateUserMember(UpdateUserRequest $request, $id)
    {
        $account = $request->account;
        $email = $request->email;
        $name = $request->name;
        $phone = $request->phone;
        $address = $request->address;
        $status = $request->status;

        //boss才能更改身分
        $role = $request->user_info->role_id;
        if ($role == 3) {
            $role_id = $request->role_id;
        } else {
            $role_id = DB::table("members")->select("role_id")->where("id", $id)->first()->role_id;
        }
        DB::table('members')->where('id', $id)->update([
            'name' => $name,
            'phone' => $phone,
            'account' => $account,
            'email' => $email,
            'address' => $address,
            'status' => $status,
            'updated_at' => parent::get_datetime(),
            "role_id" => $role_id,
        ]);
        return response()->json(['status' => 200, 'msg' => '更改資料成功']);
    }
}
