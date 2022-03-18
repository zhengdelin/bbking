<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticleAdminController extends GlobalController
{
    public function getArticles()
    {
    
        $articles = DB::select("SELECT id, title, content, updated_at, category_id ,(Select name from categories where id = category_id) as category_name FROM articles");
        return response()->json(['status' => 200,'articles' => $articles]);
    }
    public function uploadArticlePic(Request $request)
    {
        // dd($request);
        if ($request->hasFile("file")) {
            if ($request->file->isValid()) {

                // dd($request->article_pic->path(), $request->article_pic->extension());
                $article_pic = $request->file;
                $location = parent::uploadPicture("article",$article_pic);
                return response()->json(['status' => 200, 'msg' => '成功上傳圖片', 'location' => $location]);
            }
        }
        return response()->json(['status' => 400, 'msg' => "圖片上傳錯誤"]);
    }
    public function createArticle(CreateArticleRequest $request)
    {
        $title = $request->title;
        $content = $request->content;
        $category_id = $request->category_id;
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
    public function updateArticle(UpdateArticleRequest $request)
    {
        $id = $request->id;
        $title = $request->title;
        $content = $request->content;
        $category_id = $request->category_id;
        $datetime = parent::get_datetime();
        DB::table('articles')->where('id',$id)->update([
            'title'=>$title,
            'content'=>$content,
            'updated_at' => $datetime,
            'category_id'=>$category_id,
        ]);
        return response()->json(['status'=>200,'msg'=>"編輯文章成功"]);
    }
}
