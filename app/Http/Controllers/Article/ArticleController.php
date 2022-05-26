<?php

namespace App\Http\Controllers\Article;

use App\Http\Controllers\GlobalController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends GlobalController
{
    public function getArticlesByCategory(Request $request)
    {
        // dd("getArticlesByCategory",$request->all());
        $category = $request->category;
        $cat = DB::table('categories')->select('id')->where('eng_name', $category)->first();
        $articles = $cat ?
            DB::select("SELECT a.id, a.title, a.content, a.updated_at, a.category_id, 
                    (SELECT eng_name FROM `categories` WHERE id = a.category_id) AS category 
                    FROM `articles` AS a 
                    WHERE a.category_id = $cat->id AND a.status = 1;")
            : [];
        return response()->json(['status' => 200, 'articles' => $articles]);
    }
    public function getArticleById(Request $request)
    {
        // dd("getArticleById",$request->all());
        $article_id = $request->article_id;
        $article = DB::select("SELECT a.id, a.title, a.content, a.updated_at, a.category_id, 
                        (SELECT eng_name FROM `categories` WHERE id = a.category_id) AS category 
                        FROM `articles` AS a 
                        WHERE a.id = $article_id AND a.status = 1;")[0];
        return response()->json(['status' => 200, 'article' => $article]);
    }
    public function collectArticle(Request $request)
    {
        $user_id = $request->user_info->id;
        $article_id = $request->id;
        $status = $request->status;
        if ($status) {
            DB::table("member_collect_articles")->insert(['member_id' => $user_id, "article_id" => $article_id]);
            return response()->json(["status" => 200, "msg" => "已珍藏文章"]);
        } else
            DB::table("member_collect_articles")->where([["member_id", $user_id], ["article_id", $article_id]])->delete();
    }
    public function getCollectedArticles(Request $request)
    {
        // dd();
        $user_id = $request->user_info->id;
        $sql = "SELECT a.member_id, b.id, b.title, b.content, b.updated_at, b.category_id, 
                (SELECT eng_name FROM `categories` WHERE id = b.category_id) AS category  
                FROM `member_collect_articles` AS a, `articles` AS b 
                WHERE member_id = $user_id AND b.id = a.article_id;";
        $articles = DB::select($sql);
        return response()->json(['status' => 200, 'articles' => $articles]);
    }
}