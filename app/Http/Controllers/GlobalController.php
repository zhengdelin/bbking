<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GlobalController extends BasicController
{
    public function getCategories()
    {
        $categories = DB::select("SELECT a.id,a.name,b.name as category_group FROM `categories` as a, `category_groups` as b WHERE a.category_group_id = b.id");
        $result = [];
        foreach ($categories as $val) {
            $result[$val->category_group][] = ['id'=>$val->id,'name'=>$val->name];
        }
        return response()->json(['status' => 200, 'categories' => $result]);
    }
}
