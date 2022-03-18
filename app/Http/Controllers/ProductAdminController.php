<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\DB;

class ProductAdminController extends GlobalController
{
    public function getProducts()
    {
        $products = DB::select("SELECT id, name, image, description,price, category_id,(Select name from categories where id = category_id) as category_name FROM products");
        return response()->json(['status' => 200,'products' => $products]);
    }
    public function createProduct(CreateProductRequest $request)
    {
        $name = $request->name;
        $price = $request->price;
        $description = $request->description;
        $category_id = $request->category_id;
        $location = null;
        if($request->hasFile('image')){
            if ($request->image->isValid()) {
                $location = parent::uploadPicture("product", $request->image);
            }
        }
        DB::table('products')->insert([
            'name' => $name,
            'price' => $price,
            'description' => $description,
            'category_id' => $category_id,
            'image' => $location,
        ]);
        return response()->json(['status' => 200, 'msg' => '成功新增產品']);
    }
    public function updateProduct(UpdateProductRequest $request)
    {
        $id= $request->id;
        $name = $request->name;
        $price = $request->price;
        $description = $request->description;
        $category_id = $request->category_id;
        $location = $request->image;
        if($request->hasFile('image')){
            if ($request->image->isValid()) {
                /* 從資料庫取得以前的檔案路徑 */
                $filepath = DB::table('products')->select('image')->where('id',$id)->first()->image;
                /* 擷取完整檔案名稱 */
                $filename = substr($filepath,strrpos($filepath,'/')+1);
                /* 擷取附檔名 */
                $extension = substr($filename,strrpos($filename,'.'));
                /* 將副檔名取代 */
                $filename = str_replace($extension,'',$filename);
                /* 進行存檔遷移 */
                $location = parent::uploadPicture("product", $request->image,$filename);
            }
        }
        DB::table('products')->where('id',$id)->update([
            'name' => $name,
            'price' => $price,
            'description' => $description,
            'category_id' => $category_id,
            'image' => $location,
        ]);
        return response()->json(['status' => 200, 'msg' => '成功更改產品']);
    }
}
