<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class TokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('token');
        $user_info = DB::table('members')->select('account', 'token', 'updated_at','role_id')->where('token', $token)->first();
        
        // dd(strtotime('+7 Days',strtotime($user_info->updated_at))>strtotime('now'));
        #將User資訊合併進去request，傳到後端
        $request->merge(['user_info' => $user_info]);
        if (isset($user_info->token)) {
            //設定token7天過期
            $token_time = strtotime('+7 Days',strtotime($user_info->updated_at));
            //如果現在時間比7天還長，表示登陸過期
            if ($token_time < strtotime('now')) {
                return response()->json(['status' => 400, 'msg' => '登入過期 請重新登入']);
            }
            return $next($request);
        } else {
            return response()->json(['status' => 400, 'msg' => '驗證失敗 請登入']);
        }
    }
}
