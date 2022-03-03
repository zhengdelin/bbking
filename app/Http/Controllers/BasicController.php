<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class BasicController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function __construct()
    {
        date_default_timezone_set('Asia/Taipei');
    }
    
    public function get_token($text)
    {
        $token = password_hash(`{$text}{date('Y/m/d H:i:s')}`, PASSWORD_DEFAULT);
        return $token;
    }
    public function get_datetime()
    {
        return date('Y-m-d H-i-s');
    }
    public function test(Request $request)
    {
        return response()->json('test');
    }
    public function getCsrfToken()
    {
        return csrf_token();
    }
    public function getBossToken()
    {
        return DB::table("members")->select("token")->where('role_id',3)->first()->token;
    }
}
