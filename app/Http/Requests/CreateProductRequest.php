<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class CreateProductRequest extends FormRequest
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
            'name'=>['required','max:50','string',Rule::notIn(DB::table('products')->pluck('name')->toArray())],
            'price'=>'required|numeric',
            'description'=>'max:200|string|nullable',
            'category_id'=>['required',Rule::in(DB::table('categories')->pluck('id')->toArray())],
            'image'=>'nullable|image'
        ];
    }
    public function messages()
    {
        return [
            'name.not_in'=>'產品已存在'
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()] ));
    }
}
