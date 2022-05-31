<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;

class ProductRequest extends FormRequest
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
        // dd($this);
        $id = Route::getCurrentRoute()->parameter("id");
        return [
            'name' => [
                'required', 'max:50', 'string',
                Rule::notIn($id
                    ? DB::table('products')->where("id", "!=", $id)->pluck('name')->toArray()
                    : [])
            ],
            'price' => 'required|numeric',
            'introduction' => 'max:100|string|nullable',
            'description' => 'string|nullable',
            'image' => 'exclude_if:hasOldImg,true|image|nullable',
            'old_image' => "string|nullable",
            'status' => ['required', 'boolean'],
            'category_id' => ['required', Rule::in(DB::table('categories')->pluck('id')->toArray())],
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'hasOldImg'=>isset($this->old_image),
            'status' => filter_var($this->status, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE)
        ]);
    }
    public function messages()
    {
        return [
            'name.not_in' => '產品已存在'
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
