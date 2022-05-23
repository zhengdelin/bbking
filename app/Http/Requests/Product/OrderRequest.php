<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class OrderRequest extends FormRequest
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
        // dd($this->all());
        return [
            'id' => 'required',
            'delivery_method' => ['required', Rule::in([1, 2])],
            'address' => Rule::when($this->pay_method == 1, ['required', 'string', 'max:50']),
            'pay_method' => ['required', Rule::in([1, 2])],
            'pay_account' => Rule::when($this->pay_method == 1, ['required', 'string', 'max:5']),
            'name' => "required|string|max:10",
            'email' => "required|string|max:30|email",
            'phone' => "max:10|regex:/^09[0-9]{8}$/|nullable",
            "note" => 'string|nullable',
            "total_price" => "required|numeric"
        ];
    }
    public function messages()
    {
        return [
            'id.required' => 'id為必須欄位',
            'delivery_method.required' => 'delivery_method',
            'address.required' => 'address',
            'pay_method.required' => 'pay_method',
            'pay_account.required' => 'pay_account',
            'name.required' => 'name為必須欄位',
            'phone.required' => 'phone為必須欄位',
            'email.required' => 'email為必須欄位',
            'note.required' => 'note',
            'total_price.required' => 'total_price',

        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
