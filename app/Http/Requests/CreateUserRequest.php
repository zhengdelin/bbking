<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;

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
            'account'=>'required|max:20|string|regex:/^\w+([\.-]?\w+)*/',
            'password'=>'required|string',
            'email'=>'required|max:30|email',
            'phone'=>'max:10|regex:/0?\d{9}$/|nullable',
            'address'=>'max:50|string|nullable',
            'name'=>'max:10|string|nullable',
            'active'=>'boolean',
        ];
    }
    public function messages()
    {
        return [
            'account.required'=>'帳號為必填欄位',
            'account.max:20'=>'帳號最多20位元',
            'account.regex'=>"帳號格式錯誤",
            'password.required'=>'密碼為必填欄位',
            'email.required'=>'email為必填欄位',
            'email.max'=>'email最多30位元',
            'email.email'=>"email格式錯誤",
            'name.max'=>'名字最多10位元',
            'phone.max'=>'電話最多10位元',
            'phone.regex'=>'電話格式錯誤',
            'address.max'=>'地址最多50位元',
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        throw new HttpResponseException(response()->json(['status' => 400, 'error' => $message->first()] ));
    }
}
