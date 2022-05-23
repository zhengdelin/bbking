<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class AddProductToCartRequest extends FormRequest
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
            "member_id"=>['required',Rule::in(DB::table('members')->pluck('id')->toArray())],
            "product_id"=>['required',Rule::in(DB::table('products')->where('status',1)->pluck('id')->toArray())],
            "order_id"=>['numeric',Rule::in(DB::table('orders')->pluck('id')->toArray())],
            "amount"=>"required|numeric|min:0|not_in:0"
        ];
    }
}
