<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserGlobalController extends BasicController
{
    public function checkAccountExist($account)
    {
        return in_array($account, DB::table('members')->pluck('account')->toArray());
    }
}
