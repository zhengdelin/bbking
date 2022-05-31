<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\GlobalController;

use App\Http\Requests\Product\OrderRequest;
use App\Http\Requests\Product\ProductRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;

class ProductAdminController extends GlobalController
{
    public function getProducts()
    {
        $products = DB::select("SELECT id, name, image,introduction, description,price,status, category_id,(Select name from categories where id = category_id) as category_name FROM products order by id");
        parent::addImgLocation('product', $products, NULL);
        return response()->json(['status' => 200, 'products' => $products]);
    }
    public function createProduct(ProductRequest $request)
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
    public function updateProduct(ProductRequest $request, $id)
    {
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
    //取得訂單
    public function getAllOrders()
    {
        $sql = "SELECT 
                    a.id, a.product_price, a.total_price, a.delivery_fee, a.delivery_method, 
                    a.address, a.pay_method, a.pay_account, a.name, a.email, a.phone, 
                    d.name as buyer_name, d.email as buyer_email, d.phone as buyer_phone, a.note, a.status, a.order_time,
                    CONCAT('['
                      , IFNULL(
                          GROUP_CONCAT(
                            CONCAT('{', CHAR(34), 'order_id', CHAR(34), ':', b.order_id, ',')
                            ,CONCAT(CHAR(34), 'product_id', CHAR(34), ':', b.product_id, ',')
                            ,CONCAT(CHAR(34), 'name', CHAR(34), ':', CHAR(34), c.name, CHAR(34), ',')
                            ,CONCAT(CHAR(34), 'image', CHAR(34), ':', CHAR(34), IFNULL(c.image,''), CHAR(34), ',')
                            ,CONCAT(CHAR(34), 'price', CHAR(34), ':', c.price, ',')
                            ,CONCAT(CHAR(34), 'amount', CHAR(34), ':', b.amount, '}'))                         
                          ,'')
                      , ']') as products 
                      FROM `orders` AS a
                      LEFT JOIN `order_record_products` AS b ON a.id = b.order_id
                      LEFT JOIN `products` AS c ON b.product_id = c.id
                      LEFT JOIN `members` AS d ON a.member_id = d.id
                      WHERE  a.status != 0
                      GROUP BY a.id;";
        $orders = DB::select($sql);
        for ($i = 0, $len = count($orders); $i < $len; $i++) {
            $products = json_decode($orders[$i]->products);
            // dd($products);
            $orders[$i]->products = [];
            //將該訂單的產品逐一加入
            for ($j = 0, $l = count($products); $j < $l; $j++) {
                // dd($products[$j]);
                $item = parent::addImgLocation('product', NULL, $products[$j]);
                $orders[$i]->products[] = $item;
            }
        }
        return response()->json(["status" => 200, "orders" => $orders]);
    }
    public function updateOrder(OrderRequest $request, $order_id)
    {
        $address = $request->address;
        $pay_account = $request->pay_account;
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $note = $request->note;
        $order = DB::table("orders")->where([["id", $order_id], ["status", "!=", 0]])->first();
        if (!$order)
            return response()->json(["status" => 400, "msg" => "未找到可更新的訂單"]);

        if ($order->status === 4)
            return response()->json(["status" => 400, "msg" => "訂單已取消"]);


        DB::table("orders")->where("id", $order_id)->update([
            "address" => $address,
            "pay_account" => $pay_account,
            "name" => $name,
            "email" => $email,
            "phone" => $phone,
            "note" => $note
        ]);
        return response()->json(["status" => 200, "msg" => "成功更新訂單"]);
    }
    public function updateOrderStatus(Request $request, $order_id, $status)
    {
        DB::table("orders")->where("id", $order_id)->update([
            "status" => $status,
        ]);
        return response()->json(["status" => 200, "msg" => "更新訂單狀態成功"]);
    }
}
