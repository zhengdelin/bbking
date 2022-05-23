<?php

namespace App\Http\Controllers\Product;

use Illuminate\Http\Request;
use App\Http\Controllers\GlobalController;
use App\Http\Requests\Product\AddProductToCartRequest;
use App\Http\Requests\Product\OrderRequest;
use Illuminate\Support\Facades\DB;

class ProductController extends GlobalController
{
    /* 依類別取得product list */
    public function getProductsByCategory(Request $request)
    {
        $category = $request->category;
        $sql = "SELECT a.id, a.name, a.image, a.introduction, a.description, a.price , b.eng_name,
                CONCAT('[',
                    IFNULL(
                        GROUP_CONCAT(
                        CONCAT('{',CHAR(34), 'product_id',CHAR(34),':', c.product_id, ',')
                        ,CONCAT(CHAR(34), 'member_id',CHAR(34),':', c.member_id, ',')
                        ,CONCAT(CHAR(34), 'account',CHAR(34),':', CHAR(34), d.account, CHAR(34), ',')
                        ,CONCAT( CHAR(34), 'star',CHAR(34),':', c.star, ',')
                        ,CONCAT(CHAR(34), 'evaluation', CHAR(34), ':', CHAR(34),IFNULL(c.evaluation, '') ,CHAR(34) , ',')
                        ,CONCAT(CHAR(34), 'updated_at', CHAR(34), ':', CHAR(34),c.updated_at ,CHAR(34) , '}')
                        )
                    ,'')
                ,']') AS evaluations
                FROM `products` AS a
                LEFT JOIN `categories` AS b ON b.id = a.category_id
                LEFT JOIN `evaluations` AS c ON c.product_id = a.id
                LEFT JOIN `members` AS d ON c.member_id = d.id
                WHERE a.status = 1 AND b.id = (SELECT id FROM `categories` WHERE eng_name = '$category')
                GROUP BY a.id;";
        /* 只取得已上架商品 */
        $products = DB::select($sql);
        for ($i = 0, $len = count($products); $i < $len; $i++) {
            $evaluations = $products[$i]->evaluations;
            //將\n換成___n___
            $products[$i]->evaluations = parent::decodeAndReplace($evaluations);
            //取代回\n
            for ($j=0, $l = count($products[$i]->evaluations); $j < $l; $j++) { 
                $item = $products[$i]->evaluations[$j]->evaluation;
                $products[$i]->evaluations[$j]->evaluation = parent::replace__n__($item);
            }
        }
        // dd($products);
        parent::addImgLocation('product', $products, NULL);
        return response()->json(['status' => 200, 'products' => $products]);
    }
    /* 依照id取得product detail */
    public function getProductById(Request $request)
    {
        $product_id = $request->product_id;
        $sql = "SELECT a.id, a.name, a.image, a.introduction, a.description, a.price , b.eng_name,
                CONCAT('[',
                    IFNULL(
                        GROUP_CONCAT(
                        CONCAT('{',CHAR(34), 'product_id',CHAR(34),':', c.product_id, ',')
                        ,CONCAT(CHAR(34), 'member_id',CHAR(34),':', c.member_id, ',')
                        ,CONCAT(CHAR(34), 'account',CHAR(34),':', CHAR(34), d.account, CHAR(34), ',')
                        ,CONCAT( CHAR(34), 'star',CHAR(34),':', c.star, ',')
                        ,CONCAT(CHAR(34), 'evaluation', CHAR(34), ':', CHAR(34),IFNULL(c.evaluation, '') ,CHAR(34) , ',')
                        ,CONCAT(CHAR(34), 'updated_at', CHAR(34), ':', CHAR(34),c.updated_at ,CHAR(34) , '}')
                        )
                    ,'')
                ,']') AS evaluations
                FROM `products` AS a
                LEFT JOIN `categories` AS b ON b.id = a.category_id
                LEFT JOIN `evaluations` AS c ON c.product_id = a.id
                LEFT JOIN `members` AS d ON c.member_id = d.id
                WHERE a.status = 1 AND a.id = $product_id
                GROUP BY a.id;";
        $product = DB::select($sql);
        if ($product) {
            $product = $product[0];
            $product->evaluations = parent::decodeAndReplace($product->evaluations);
            for ($j=0, $l = count($product->evaluations); $j < $l; $j++) { 
                $item = $product->evaluations[$j]->evaluation;
                $product->evaluations[$j]->evaluation = parent::replace__n__($item);
            }
            parent::addImgLocation('product', NULL, $product);
        }
        return response()->json(['status' => 200, 'product' => $product]);
    }
    /* 將產品新增進購物車 */
    public function addProductToCart(AddProductToCartRequest $request)
    {
        $member_id = $request->member_id;
        $product_id = $request->product_id;
        $order_id = $request->order_id;
        $amount = $request->amount;
        /* 如果有order_id，表示由購物車介面直接點擊+-則直接更改購物車內容 */
        if ($order_id) {
            DB::table('order_record_products')
                ->where([['order_id', $order_id], ['product_id', $product_id]])
                ->update(['amount' => $amount]);
            return response()->json(['status' => 200, 'msg' => "已更改購物車內容"]);
        } else {
            $this->updateCart($member_id, $product_id, $amount);
            return response()->json(['status' => 200, 'msg' => "商品已加入購物車"]);
        }
    }
    public function updateCart($member_id, $product_id, $amount)
    {

        /* 否則進行以下判斷 */
        /* product是否在order中 */
        $product_in_order = false;
        $order = $this->checkMemberOrder($member_id, 0);

        /* 如果沒有order創建購物車order，否則檢查product是否在order中*/
        if (!$order)
            $order = $this->createMemberCart($member_id);
        else
            $product_in_order = $this->checkProductInOrder($order->id, $product_id);


        if ($product_in_order) {
            /* 如果product在order中就update，並且從原本的amount上添加 */
            DB::table('order_record_products')
                ->where([['order_id', $order->id], ['product_id', $product_id]])
                ->update(['amount' => $amount + $product_in_order->amount]);
        } else
            DB::table('order_record_products')
                ->insert(['order_id' => $order->id, 'product_id' => $product_id, 'amount' => $amount]);
    }
    /* 確認member是否有order */
    public function checkMemberOrder($member_id, $status)
    {
        return  DB::table('orders')->select('id')->where([['member_id', $member_id], ['status', $status]])->first();
    }
    /* 創建cart */
    public function createMemberCart($member_id)
    {
        DB::table('orders')->insert(['member_id' => $member_id]);
        return $this->checkMemberOrder($member_id, 0);
    }
    /* 確認product是否已被紀錄 */
    public function checkProductInOrder($order_id, $product_id)
    {
        return DB::table('order_record_products')->where([['order_id', $order_id], ['product_id', $product_id]])->first();
    }
    /* 取得購物車內容 */
    public function getCartByMember(Request $request)
    {
        $member_id = $request->member_id;
        /* 取得order id、product id、產品名稱、圖片、價格、數量、類別名稱 */
        $cart_product_infos = DB::select(
            "SELECT 
        a.order_id,
        a.product_id,
        b.name,b.image,b.price,
        a.amount,
        (SELECT eng_name FROM categories WHERE id = b.category_id) as eng_name
        FROM order_record_products as a, products as b 
        WHERE a.product_id = b.id AND a.order_id = (SELECT id FROM orders WHERE member_id = $member_id and status = 0);"
        );
        // dd(json_encode($cart_product_infos));
        if (!empty($cart_product_infos))
            parent::addImgLocation('product', $cart_product_infos, NULL);
        return response()->json(['status' => 200, 'cart_product_infos' => $cart_product_infos]);
    }
    public function deleteCartProduct(Request $request)
    {
        $order_id = $request->order_id;
        $product_id = $request->product_id;
        DB::table('order_record_products')->where([['order_id', $order_id], ['product_id', $product_id]])->delete();
        return response()->json(['status' => 200, 'msg' => '成功刪除產品']);
    }
    /* 提交訂單 */
    public function createOrder(OrderRequest $request)
    {
        // dd();
        $id = $request->id;
        $delivery_method = $request->delivery_method;
        $address = $request->address;
        $pay_method = $request->pay_method;
        $pay_account = $request->pay_account;
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $note = $request->note;
        $total_price = $request->total_price;
        DB::table('orders')
            ->where('id', $id)
            ->update([
                'delivery_method' => $delivery_method,
                'address' => $address,
                'pay_method' => $pay_method,
                'pay_account' => $pay_account,
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'note' => $note,
                'product_price' => $total_price,
                'delivery_fee' => $delivery_method == 1 ? 60 : 0,
                'total_price' => $delivery_method == 1 ? $total_price + 60 : $total_price,
                'order_time' => parent::get_datetime(),
                'status' => 1,
            ]);
        return response()->json(['status' => 200, 'msg' => '成功提交訂單']);
    }
    //取得使用者訂單紀錄
    public function getOrdersByMember(Request $request)
    {
        $id = $request->user_info->id;
        $sql = "SELECT 
                    a.id, a.product_price, a.total_price, a.delivery_fee, a.delivery_method, 
                    a.address, a.pay_method, a.name, a.email, a.phone, a.note, a.status, a.updated_time,
                    CONCAT('['
                      , IFNULL(
                          GROUP_CONCAT(
                            CONCAT('{', CHAR(34), 'order_id', CHAR(34), ':', b.order_id, ',')
                            ,CONCAT(CHAR(34), 'product_id', CHAR(34), ':', b.product_id, ',')
                            ,CONCAT(CHAR(34), 'name', CHAR(34), ':', CHAR(34), c.name, CHAR(34), ',')
                            ,CONCAT(CHAR(34), 'image', CHAR(34), ':', CHAR(34), IFNULL(c.image,''), CHAR(34), ',')
                            ,CONCAT(CHAR(34), 'price', CHAR(34), ':', c.price, ',')
                            ,CONCAT(CHAR(34), 'amount', CHAR(34), ':', b.amount, ',')
                            ,CONCAT(CHAR(34), 'eng_name', CHAR(34), ':', CHAR(34), (SELECT eng_name FROM categories WHERE id = c.category_id), CHAR(34),',')
                            ,CONCAT(CHAR(34), 'evaluation',CHAR(34), ':', 
                                IFNULL(
                                    CONCAT('{',CHAR(34), 'star',CHAR(34),':', IFNULL(d.star, 0), ',', CHAR(34), 'evaluation',CHAR(34), ':', CHAR(34),IFNULL(d.evaluation, '') ,CHAR(34) , '}')
                                ,'')
                            , '}')) 
                          ,'')
                      , ']') as products 
                      FROM `orders` AS a
                      LEFT JOIN `order_record_products` AS b ON a.id = b.order_id
                      LEFT JOIN `products` AS c ON b.product_id = c.id
                      LEFT JOIN `evaluations` AS d ON d.product_id = b.product_id AND d.member_id = a.member_id
                      WHERE  a.member_id = $id AND a.status != 0
                      GROUP BY a.id;";
        // $sql = "SELECT 
        // a.id, a.product_price, a.total_price, a.delivery_fee, a.delivery_method, 
        // a.address, a.pay_method, a.name, a.email, a.phone, a.note, a.status, a.updated_time,
        // CONCAT('['
        //   , IFNULL(
        //       GROUP_CONCAT(
        //       CONCAT('{', CHAR(34), 'order_id', CHAR(34), ':', b.order_id, ',')
        //       ,CONCAT(CHAR(34), 'product_id', CHAR(34), ':', b.product_id, ',')
        //       ,CONCAT(CHAR(34), 'name', CHAR(34), ':', CHAR(34), c.name, CHAR(34), ',')
        //       ,CONCAT(CHAR(34), 'image', CHAR(34), ':', CHAR(34), IFNULL(c.image,''), CHAR(34), ',')
        //       ,CONCAT(CHAR(34), 'price', CHAR(34), ':', c.price, ',')
        //       ,CONCAT(CHAR(34), 'amount', CHAR(34), ':', b.amount, ',')
        //       ,CONCAT(CHAR(34), 'eng_name', CHAR(34), ':', CHAR(34), (SELECT eng_name FROM categories WHERE id = c.category_id), CHAR(34), ',')
        //       ,CONCAT(CHAR(34), 'star', CHAR(34), ':', IFNULL(d.star,0), ',')
        //     ,CONCAT(CHAR(34), 'evaluation', CHAR(34), ':', CHAR(34), IFNULL(d.evaluation,''), CHAR(34), '}')     
        //       ,'')
        //   , ']') as products 
        //   FROM `orders` AS a
        //   LEFT JOIN `order_record_products` AS b ON a.id = b.order_id
        //   LEFT JOIN `products` AS c ON b.product_id = c.id
        //   LEFT JOIN `evaluations` AS d ON a.member_id = d.member_id AND b.product_id = d.product_id
        //   WHERE  a.member_id = $id AND a.status != 0
        //   GROUP BY a.id;";
        $orders = DB::select($sql);
        // $test = json_encode("1233\n123");
        // dd($test, json_decode($test));
        // $value = preg_replace("/\\n/", "___n___", $orders[0]->products);
        // $value = json_decode($orders[0]->products);
        // dd($orders);
        for ($i = 0, $len = count($orders); $i < $len; $i++) {
            $products = parent::decodeAndReplace($orders[$i]->products);
            // dd($products);
            
            for ($j = 0, $length = count($products); $j < $length; $j++) {
                $item = $products[$j]->evaluation->evaluation;
                $products[$j]->evaluation->evaluation = parent::replace__n__($item);
            }
            $orders[$i]->products = [];
            //將該訂單的產品逐一加入
            $products = parent::addImgLocation('product', $products, NULL);
            for ($j = 0, $l = count($products); $j < $l; $j++) {
                $orders[$i]->products[] = $products[$j];
            }
        }
        return response()->json(['status' => 200, 'orders' => $orders]);
    }
    //依照訂單id取得訂單資訊
    /* public function getOrderById(Request $request)
    {
        $user_id = $request->user_info->id;
        $order_id = $request->order_id;
        $sql = "SELECT 
                    a.id, a.product_price, a.total_price, a.delivery_fee, a.delivery_method, 
                    a.address, a.pay_method, a.name, a.email, a.phone, a.note, a.status, a.updated_time,
                    CONCAT('['
                      , IFNULL(
                          GROUP_CONCAT(
                          CONCAT('{', CHAR(34), 'order_id', CHAR(34), ':', b.order_id, ',')
                          ,CONCAT(CHAR(34), 'product_id', CHAR(34), ':', b.product_id, ',')
                          ,CONCAT(CHAR(34), 'name', CHAR(34), ':', CHAR(34), c.name, CHAR(34), ',')
                          ,CONCAT(CHAR(34), 'image', CHAR(34), ':', CHAR(34), IFNULL(c.image,''), CHAR(34), ',')
                          ,CONCAT(CHAR(34), 'price', CHAR(34), ':', c.price, ',')
                          ,CONCAT(CHAR(34), 'amount', CHAR(34), ':', b.amount, ',')
                          ,CONCAT(CHAR(34), 'eng_name', CHAR(34), ':', CHAR(34), (SELECT eng_name FROM categories WHERE id = c.category_id), CHAR(34), '}')
                          )
                          ,'')
                      , ']') as products 
                      FROM `orders` AS a
                      LEFT JOIN `order_record_products` AS b ON a.id = b.order_id
                      LEFT JOIN `products` AS c ON b.product_id = c.id
                      WHERE  a.member_id = $user_id AND a.status != 0 AND a.id = $order_id
                      GROUP BY a.id;";
        $order = DB::select($sql)[0];
        if (!empty($order)) {
            $products = json_decode($order->products);
            $products = parent::addImgLocation('product', $products, NULL);
            $order->products = [];
            for ($i = 0, $len = count($products); $i < $len; $i++) {
                //將該訂單的產品逐一加入
                $order->products[] = $products[$i];
            }
        }

        return response()->json(['status' => 200, 'order' => $order]);
    } */
    public function cancelOrder(Request $request)
    {
        $order_id = $request->id;
        DB::table("orders")->where('id', $order_id)->update([
            "status" => 10
        ]);
        return response()->json(['status' => 200, "msg" => '成功取消訂單']);
    }
    public function recoverOrder(Request $request)
    {
        $order_id = $request->id;
        DB::table("orders")->where('id', $order_id)->update([
            "status" => 1
        ]);
        return response()->json(['status' => 200, "msg" => '成功恢復訂單']);
    }
    //再買一次
    public function shoppingAgain(Request $request)
    {
        $user_id = $request->user_info->id;
        //被加入的對象
        $_order_id = $request->id;

        $products = $request->products;
        if (!$products) {
            $products = DB::table("order_record_products")->where("order_id", $_order_id)->first()->toArray();
        }
        for ($i = 0, $len = count($products); $i < $len; $i++) {
            $item = $products[$i];
            $this->updateCart($user_id, $item["product_id"], $item["amount"]);
        }
        return response()->json(["status" => 200, "msg" => "成功將所有商品加入購物車"]);
    }
    //評價
    public function evaluate(Request $request)
    {
        $product_id = $request->product_id;
        $star = $request->star;
        $evaluation = $request->evaluation;

        $user_id = $request->user_info->id;

        //曾經買過此商品的人
        // $u = DB::table("order_record_products")->ta
        $user_list = DB::select("SELECT DISTINCT b.member_id 
                FROM `order_record_products` AS a, `orders` AS b 
                WHERE a.product_id = $product_id AND b.id = a.order_id;");
        // dd($user_list[0]);

        //沒有買過商品不能評價
        if (!in_array($user_id, array_column($user_list, "member_id")))
            return response()->json(["status" => 400, "msg" => "沒有權限"]);
        // dd(DB::table("evaluations")->where([["member_id", $user_id], ["product_id", $product_id]])->exists());
        //已經有評價過
        if (DB::table("evaluations")->where([["member_id", $user_id], ["product_id", $product_id]])->exists()) {
            DB::table("evaluations")
                ->where([["member_id", $user_id], ["product_id", $product_id]])
                ->update([
                    "evaluation" => $evaluation,
                    "star" => $star
                ]);
            return response()->json(['status' => 200, 'msg' => "已更改評價內容"]);
        }

        DB::table("evaluations")
            ->insert([
                "member_id" => $user_id,
                "product_id" => $product_id,
                "evaluation" => $evaluation,
                "star" => $star
            ]);
        return response()->json(['status' => 200, 'msg' => "已新增評價內容"]);
    }
}
