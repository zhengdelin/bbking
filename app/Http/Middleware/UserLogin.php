<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;

class UserLogin
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
        if(!session('user')){
            $user=Cookie::get('user');
            if($user){
                $user_data=DB::table('members')->where('account',$user)->first();
                if(Cookie::get('remember_token')!==$user_data->remember_token){
                    return redirect('/');
                }
                session(['user'=>Cookie::get('user')]);
            }else{
                return redirect('/');
            }
        }
        return $next($request);
    }
}
