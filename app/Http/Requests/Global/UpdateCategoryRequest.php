<?php

namespace App\Http\Requests\Global;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class UpdateCategoryRequest extends FormRequest
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
        /* 判斷有沒有更改 */
        $changed = $this->name !=
            DB::table($this->type == 'category' ? 'categories' : 'category_groups')
            ->where('id', $this->id ? $this->id : 1)->first()->name;
        return [
            'id' => ['bail', 'required', 'numeric'],
            'name' => [
                'required', 'max:10', 'string',
                /* 已經更改過必需不重複 */
                Rule::notIn($changed ?
                    DB::table($this->type == 'category' ? 'categories' : 'category_groups')
                    ->pluck('name')->toArray()
                    : [])
            ],
            'eng_name'=>['exclude_if:type,category_group',Rule::requiredIf($this->type == 'category'),'max:30'],
            'type' => ['required', Rule::in(['category', 'category_group'])],
            'category_group_id' => [
                'exclude_if:type,category_group',
                Rule::requiredIf($this->type == 'category'),
                Rule::in(DB::table('category_groups')->pluck('id')->toArray())
            ]
        ];
    }
    public function messages()
    {
        return [
            'name.not_in' => '類別名稱已經存在',
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        // dd($message);
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
