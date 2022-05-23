<?php

namespace App\Http\Requests\User;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class CreateUserRequest extends FormRequest
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
            'account' => [
                'bail','required', 'max:20', 'string', 'regex:/^\w+([\.-]?\w+)*/',
                Rule::notIn(DB::table('members')->pluck('account')->toArray())
            ],
            'password' => 'required|string',
            'email' => 'required|max:30|email',
            'phone' => 'max:10|regex:/^09[0-9]{8}$/|nullable',
            'address' => 'max:50|string|nullable',
            'name' => 'max:10|string|nullable',
        ];
    }
    public function messages()
    {
        return [
            'account.not_in'=>'帳號已被註冊' 
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
