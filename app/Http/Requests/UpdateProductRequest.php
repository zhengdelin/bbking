<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
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
    public function rules(Request $request)
    {
        $changed = $request->name !=
            DB::table('products')->where('id', $request->id ? $request->id : 1)->first()->name;
        return [
            'id' => 'bail|required|numeric',
            'name' => [
                'required', 'max:50', 'string',
                Rule::notIn($changed ? DB::table('products')->pluck('name')->toArray() : [])
            ],
            'price' => 'required|numeric',
            'description' => 'max:200|string|nullable',
            'category_id' => ['required',Rule::in(DB::table('categories')->pluck('id')->toArray())],
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
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
