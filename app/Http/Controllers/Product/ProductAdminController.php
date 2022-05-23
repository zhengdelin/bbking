<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\GlobalController;

use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use Illuminate\Support\Facades\DB;

class ProductAdminController extends GlobalController
{
    public function getProducts()
    {
        $products = DB::select("SELECT id, name, image,introduction, description,price,status, category_id,(Select name from categories where id = category_id) as category_name FROM products order by id");
        parent::addImgLocation('product', $products, NULL);
        return response()->json(['status' => 200, 'products' => $products]);
    }
    public function createProduct(CreateProductRequest $request)
    {
        $name = $request->name;
        $price = $request->price;
        $introduction = $request->introduction;
        $description = $request->description;
        $category_id = $request->category_id;
        $status = $request->status;
        $image_file_name = NULL;
        if ($request->hasFile('image')) {
            if ($request->image->isValid()) {
                $image_file_name = parent::uploadPicture("product", $request->image)['name'];
            }
        }
        DB::table('products')->insert([
            'name' => $name,
            'price' => $price,
            'introduction' => $introduction,
            'description' => $description,
            'category_id' => $category_id,
            'status' => $status,
            'image' => $image_file_name,
        ]);
        return response()->json(['status' => 200, 'msg' => '成功新增產品']);
    }
    public function updateProduct(UpdateProductRequest $request)
    {
        $id = $request->id;
        $name = $request->name;
        $price = $request->price;
        $introduction = $request->introduction;
        $description = $request->description;
        $category_id = $request->category_id;
        $status = $request->status;
        $img_name = $this->getFileName($request->old_image);
        if ($request->hasFile('image')) {
            if ($request->image->isValid()) {
                /* 如果有檔案 覆蓋掉以前的檔案 */
                if ($img_name) {
                    /* 進行存檔遷移 */
                    $img_name = parent::uploadPicture("product", $request->image, $img_name)['name'];
                } else {
                    /* 沒有檔案 */
                    $img_name = parent::uploadPicture("product", $request->image)['name'];
                }
            }
        }
        DB::table('products')->where('id', $id)->update([
            'name' => $name,
            'price' => $price,
            'introduction' => $introduction,
            'description' => $description,
            'category_id' => $category_id,
            'image' => $img_name,
            'status' => $status
        ]);
        return response()->json(['status' => 200, 'msg' => '成功更改產品']);
    }
}
