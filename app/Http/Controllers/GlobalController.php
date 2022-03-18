<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Illuminate\Routing\Controller as BaseController;

class GlobalController extends BaseController
{
    public function __construct()
    {
        /* 初始化時區 */
        date_default_timezone_set('Asia/Taipei');
    }
    /* 取得時間 */
    public function get_datetime()
    {
        return date('Y-m-d H-i-s');
    }
    /* 取得類別 */
    public function getCategories()
    {
        $categories = DB::select("SELECT a.id,a.name,a.category_group_id,b.name as category_group_name, url_path
                                FROM `categories` as a, `category_groups` as b WHERE a.category_group_id = b.id");
        $result = [];
        foreach ($categories as $val) {
            $result[$val->category_group_name][] = $val;
        }
        $category_groups = DB::table("category_groups")->select('id', 'name')->get();
        return response()->json(['status' => 200, 'categories' => $result, 'category_groups' => $category_groups]);
    }
    /* 新建類別 */
    public function createCategory(CreateCategoryRequest $request)
    {
        $name = $request->name;
        $type = $request->type;
        $category_group_id = $request->category_group_id;
        if ($type == 'category') {
            DB::table("categories")->insert([
                'name' => $name,
                'category_group_id' => $category_group_id
            ]);
            return response()->json(['status' => 200, 'msg' => '新增類別成功']);
        } else {
            $other_group = DB::table("category_groups")->where('name', '其他')->first();
            DB::table('category_groups')->where('id', $other_group->id)->delete();
            DB::table("category_groups")->insert([
                [
                    'name' => $name,
                ],
                [
                    'name' => '其他',
                ]
            ]);
            DB::table('categories')
                ->where('category_group_id', $other_group->id)
                ->update(['category_group_id' => $other_group->id + 2]);
            return response()->json(['status' => 200, 'msg' => '新增類別群組成功']);
        }
    }
    /* 編輯類別 */
    public function updateCategory(UpdateCategoryRequest $request)
    {
        $id = $request->id;
        $name = $request->name;
        $type = $request->type;
        $category_group_id = $request->category_group_id;
        if ($type == 'category') {
            DB::table("categories")->where('id', $id)->update([
                'name' => $name,
                'category_group_id' => $category_group_id
            ]);
            return response()->json(['status' => 200, 'msg' => '更改類別成功']);
        } else {
            DB::table('category_groups')->where('id', $id)->update([
                'name' => $name,
            ]);
            return response()->json(['status' => 200, 'msg' => '更改類別群組成功']);
        }
    }
    /* 上傳圖片 */
    public function uploadPicture($type,  $file, $file_name = '')
    {
        $folder = "pictures/$type/";
        $path = public_path() . "/" . $folder;
        $extension  = strtolower($file->extension()) ?: "png";
        if (!$file_name)
            $file_name = time() . "_" . Str::random(10) . "." . $extension;
        else
            $file_name = "$file_name.$extension";
        $file->move($path, $file_name);
        /* 回傳路徑 */
        return "/$folder$file_name";
    }

    public function get_token($text)
    {
        $datetime = $this->get_datetime();
        $token = hash('sha256', "$text$datetime");
        return $token;
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
        return DB::table("members")->select("token")->where('role_id', 3)->first()->token;
    }
}
