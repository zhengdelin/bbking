<?php

namespace App\Http\Controllers;

use App\Http\Requests\Global\CreateStoreInfoRequest;
use App\Http\Requests\Global\CreateActivityImgRequest;
use App\Http\Requests\Global\CreateCategoryRequest;
use App\Http\Requests\Global\UpdateActivityImgRequest;
use App\Http\Requests\Global\UpdateCategoryRequest;
use App\Http\Requests\Global\UpdateStoreInfoRequest;
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
        $categories = DB::select("SELECT a.id,a.name,a.category_group_id,b.name as category_group_name, eng_name
                                FROM `categories` as a, `category_groups` as b WHERE a.category_group_id = b.id");
        $category_groups = DB::table("category_groups")->select('id', 'name')->get();
        return response()->json(['status' => 200, 'categories' => $categories, 'category_groups' => $category_groups]);
    }
    /* 新建類別 */
    public function createCategory(CreateCategoryRequest $request)
    {
        $name = $request->name;
        $type = $request->type;
        if ($type == 'category') {
            $category_group_id = $request->category_group_id;
            $eng_name = $request->eng_name;
            DB::table("categories")->insert([
                'name' => $name,
                'eng_name' => $eng_name,
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
    /* 取得活動圖片 */
    public function getActivityImgs()
    {
        $activity_imgs = DB::table('activity_imgs')->where('status', 1)->get();
        $this->addImgLocation('activity', $activity_imgs, NULL);
        return response()->json(['status' => 200, 'activity_imgs' => $activity_imgs]);
    }
    /* 取得所有活動圖片 */
    public function getAllActivityImgs()
    {
        $activity_imgs = DB::table('activity_imgs')->get();
        $this->addImgLocation('activity', $activity_imgs, NULL);
        return response()->json(['status' => 200, 'activity_imgs' => $activity_imgs]);
    }
    /* 新增活動圖片 */
    public function createActivityImg(CreateActivityImgRequest $request)
    {
        $status = $request->status;
        $url = isset($request->url) ? $request->url : NULL;
        $img_name = '';
        if ($request->hasFile('image')) {
            if ($request->image->isValid()) {
                $img_name = $this->uploadPicture("activity", $request->image)['name'];
            }
        }
        DB::table('activity_imgs')->insert([
            'url' => $url,
            'status' => $status,
            'image' => $img_name
        ]);
        return response()->json(['status' => 200, 'msg' => '新增活動圖片成功']);
    }
    /* 更新活動圖片 */
    public function updateActivityImg(UpdateActivityImgRequest $request)
    {
        $id = $request->id;
        $url = isset($request->url) ? $request->url : NULL;
        $status = $request->status;
        $img_name = $this->getFileName($request->old_image);
        if ($request->hasFile('image')) {
            if ($request->image->isValid()) {
                /* 如果有檔案 覆蓋掉以前的檔案 */
                if ($img_name) {
                    /* 進行存檔遷移 */
                    $img_name =
                        $this->uploadPicture(
                            "activity",
                            $request->image,
                            $img_name
                        )['name'];
                } else {
                    /* 沒有檔案 */
                    $img_name = $this->uploadPicture("product", $request->image)['name'];
                }
            }
        }
        DB::table('activity_imgs')->where('id', $id)->update([
            'url' => $url,
            'status' => $status,
            'image' => $img_name
        ]);
        return response()->json(['status' => 200, 'msg' => '更新活動圖片成功']);
    }
    /* 取得店面資訊 */
    public function getStoreInfos()
    {
        $store_infos = DB::table("store_infos")->where('status', 1)->get();
        $this->addImgLocation('store_info', $store_infos, NULL, 'logo');
        return response()->json(['status' => 200, 'store_infos' => $store_infos]);
    }
    /* 取得所有店面資訊 */
    public function getAllStoreInfos()
    {
        $store_infos = DB::table("store_infos")->get();
        $this->addImgLocation('store_info', $store_infos, NULL, 'logo');
        return response()->json(['status' => 200, 'store_infos' => $store_infos]);
    }
    /* 新增店面資訊 */
    public function createStoreInfo(CreateStoreInfoRequest $request)
    {
        $name = $request->name;
        $eng_name = isset($request->eng_name) ? $request->eng_name : '';
        $url = isset($request->url) ? $request->url : '';
        $address = isset($request->address) ? $request->address : '';
        $phone = isset($request->phone) ? $request->phone : '';
        $email = isset($request->email) ? $request->email : '';
        $business_hours  = $request->business_hours;
        $description = $request->description;
        $isHeadquarter = $request->isHeadquarter;
        $status = $request->status;
        $img_name = '';
        if ($request->hasFile('logo')) {
            if ($request->logo->isValid()) {
                $img_name = $this->uploadPicture("store_info", $request->logo)['name'];
            }
        }
        DB::table('store_infos')->insert([
            'name' => $name,
            'eng_name' => $eng_name,
            'url' => $url,
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'business_hours' => $business_hours,
            'description' => $description,
            'isHeadquarter' => $isHeadquarter,
            'status' => $status,
            'logo' => $img_name,
        ]);
        return response()->json(['status' => 200, 'msg' => '新增店面資訊成功']);
    }
    /* 更新店面資訊 */
    public function updateStoreInfo(UpdateStoreInfoRequest $request)
    {
        $id = $request->id;
        $name = $request->name;
        $eng_name = isset($request->eng_name) ? $request->eng_name : '';
        $url = isset($request->url) ? $request->url : '';
        $address = isset($request->address) ? $request->address : '';
        $phone = isset($request->phone) ? $request->phone : '';
        $email = isset($request->email) ? $request->email : '';
        $business_hours  = $request->business_hours;
        $description = $request->description;
        $isHeadquarter = $request->isHeadquarter;
        $status = $request->status;
        $img_name = $this->getFileName($request->old_image);
        if ($request->hasFile('logo')) {
            if ($request->logo->isValid()) {
                /* 覆蓋掉以前的檔案 */
                /* 進行存檔遷移 */
                $img_name =
                    $this->uploadPicture(
                        "store_info",
                        $request->logo,
                        $img_name
                    )['name'];
            }
        }
        DB::table('store_infos')->where('id', $id)->update([
            'name' => $name,
            'eng_name' => $eng_name,
            'url' => $url,
            'address' => $address,
            'phone' => $phone,
            'email' => $email,
            'business_hours' => $business_hours,
            'description' => $description,
            'isHeadquarter' => $isHeadquarter,
            'status' => $status,
            'logo' => $img_name,
        ]);
        return response()->json(['status' => 200, 'msg' => '更新店面資訊成功']);
    }
    /* 上傳圖片 */
    public function uploadPicture($type,  $file, $file_name = '')
    {
        $folder = "pictures/$type/";
        $path = public_path() . "/" . $folder;
        $extension  = strtolower($file->extension()) ?: "png";
        if (!$file_name)
            $file_name = time() . "_" . Str::random(10) . "." . $extension;
        else {
            /* 擷取附檔名 */
            $old_extension = substr($file_name, strrpos($file_name, '.') + 1);
            /* 將副檔名取代 */
            $file_name = str_replace($old_extension, $extension, $file_name);
        }
        $file->move($path, $file_name);
        /* 回傳路徑 */
        return ['location' => "/$folder$file_name", 'name' => $file_name];
    }
    /* 將路徑轉成圖片名稱，去掉副檔名 */
    public function getFileName($img_name)
    {
        /* 取出檔案名稱 */
        $img_name = substr($img_name, strrpos($img_name, '/') + 1);
        return $img_name;
    }
    /**
     * 將圖片加上路徑
     * 
     * @param type 圖片類別 對應資料夾名稱 @example /pictures/product -> type = product
     * @param items 將陣列內所有物件的圖片加上路徑
     * @param item 只將單一物件的圖片加上路徑
     * @param key 物件的圖片的key
     */
    public function addImgLocation($type, $items, $item, $key = 'image')
    {
        /* 三個參數，第二個為二維陣列或物件，第三個為一為 */
        if (!empty($items) && $items != NUll) {
            foreach ($items as $item) if ($item->$key) {
                $item->$key = "/pictures/$type/" . $item->$key;
            }
            return $items;
        } else if ($item) {
            if ($item->$key)
                $item->$key = "/pictures/$type/" . $item->$key;
            return $item;
        }
    }

    public function get_token($text)
    {
        $datetime = $this->get_datetime();
        $token = hash('sha256', "$text$datetime");
        return $token;
    }

    public function test(Request $request)
    {
        // $sql = "SELECT 
        // CONCAT('{', a.product_id, ':', 
        //        GROUP_CONCAT(
        //            CONCAT('{', a.member_id, ':')
        //            ,CONCAT('{', CHAR(34), 'product_id', CHAR(34), ':', a.product_id, ','))
        //                ,CONCAT(CHAR(34), 'member_id', CHAR(34), ':', a.member_id, ',')
        //        ,CONCAT(CHAR(34), 'star', CHAR(34), ':', a.star, ',')
        //        ,CONCAT(CHAR(34), 'evaluation', CHAR(34), ':', a.evaluation, ',')
        //        ,CONCAT(CHAR(34), 'updated_at', CHAR(34), ':', a.updated_at, '}}')
        //        ,'}') AS evaluations FROM `evaluations` AS a GROUP BY a.product_id";

        $sql = "SELECT a.id, a.name, a.image, a.introduction, a.description, a.price , b.eng_name,
        CONCAT('[',
                IFNULL(
               GROUP_CONCAT(
                   CONCAT( '{',CHAR(34), 'star',CHAR(34),':', c.star, ',')
                   ,CONCAT(CHAR(34), 'product_id',CHAR(34),':', c.product_id, ',')
                   ,CONCAT(CHAR(34), 'member_id',CHAR(34),':', c.member_id, ',')
                   ,CONCAT(CHAR(34), 'evaluation', CHAR(34), ':', CHAR(34),IFNULL(c.evaluation, '') ,CHAR(34) , ',')
                    ,CONCAT(CHAR(34), 'updated_at', CHAR(34), ':', CHAR(34),c.updated_at ,CHAR(34) , '}')
               ),'')
               ,']') AS evaluations
        FROM `products` AS a
        LEFT JOIN `categories` AS b ON b.id = a.category_id
        LEFT JOIN `evaluations` AS c ON c.product_id = a.id
        WHERE a.status = 1 AND b.id = (SELECT id FROM `categories` WHERE eng_name = 'electric-guitar')
        GROUP BY a.id;";
        $products = DB::select($sql);
        for ($i = 0, $len = count($products); $i < $len; $i++) {
            $evaluations = json_decode($products[$i]->evaluations);
            $products[$i]->evaluations = $evaluations;
            //將該訂單的產品逐一加入
            // $products = parent::addImgLocation('product', $products, NULL);
            // for ($j = 0, $l = count($products); $j < $l; $j++) {
            //     $products[$i]->products[] = $products[$j];
            // }
        }
        dd($products);
        return response()->json('test');
    }
    //執行 json decode並且替換掉換行為___n___
    public function decodeAndReplace($item)
    {
        $item = preg_replace("/\\r\n/", "___n___", $item);
        $item = preg_replace("/\\n/", "___n___", $item);
        $item = json_decode($item);
        return $item;
    }
    //將__n__轉回\n
    public function replace__n__($item)
    {
        return preg_replace("/___n___/", "\n", $item);

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
