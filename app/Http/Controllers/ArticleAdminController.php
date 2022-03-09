<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticleAdminController extends BasicController
{
    public function getArticles()
    {
        $articles = DB::select("SELECT id, title, content, updated_at, (Select name from categories where id = category_id) as category FROM articles");
        return response()->json(['status' => 200, 'articles' => $articles]);
    }
    public function uploadArticlePic(Request $request)
    {
        // dd($request);
        if ($request->hasFile("file")) {
            if ($request->file->isValid()) {

                // dd($request->article_pic->path(), $request->article_pic->extension());
                $article_pic = $request->file;
                $folder = "pictures/article_pics/";
                $path = public_path() . "/" . $folder;
                $extension  = strtolower($article_pic->extension()) ?: "png";
                $file_name = parent::get_datetime() . "_" . Str::random(10) . "." . $extension;

                $article_pic->move($path, $file_name);

                return response()->json(['status' => 200, 'msg' => '成功上傳圖片', 'location' => "/".$folder . $file_name], 200);
            }
        }
        return response()->json(['status' => 400, 'msg' => "圖片上傳錯誤"], 400);
    }
    public function createArticle(Request $request)
    {
        $title = $request->title;
        $content = $request->content;
        $category_id = $request->category ? $request->category:999;
        $datetime = parent::get_datetime();

        DB::table('articles')->insert([
            'title'=>$title,
            'content'=>$content,
            'created_at' => $datetime,
            'updated_at' => $datetime,
            'category_id'=>$category_id,
        ]);
        return response()->json(['status'=>200,'msg'=>"新增文章成功"]);
    }
}
