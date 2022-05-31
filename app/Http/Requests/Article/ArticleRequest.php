<?php

namespace App\Http\Requests\Article;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'=>'required|max:100|string',
            'content'=>'required|string',
            'category_id'=>['required',Rule::in(DB::table('categories')->pluck('id')->toArray())]
        ];
    }
    public function messages()
    {
        return [
            'title.required'=>'標題為必填欄位',
            'title.max'=>'標題最多100位元',
            'content.required'=>'缺少文章內容',
            'category_id.required'=>'缺少類別'
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()] ));
    }
}
