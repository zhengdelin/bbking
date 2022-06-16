<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
        $changed = $this->account !=
            DB::table('members')->where('id', $this->id ? $this->id : 1)->first()->account;
        
            $changed_email = $this->email !=
                DB::table('members')->where('id', $this->id ? $this->id : 1)->first()->email;
        return [
            'id' => 'bail|required|numeric',
            'account' => [
                'bail', 'required', 'max:20', 'string', 'regex:/^\w+([\.-]?\w+)*/',
                Rule::notIn($changed ? DB::table('members')->pluck('account')->toArray() : [])
            ],
            'email' => [
                'required', 'max:30', 'email',
                Rule::notIn($changed_email ? DB::table('members')->pluck('email')->toArray() : [])
            ],
            'phone' => 'max:10|regex:/^09[0-9]{8}$/|nullable',
            'address' => 'max:50|string|nullable',
            'name' => 'max:10|string|nullable',
            // 'status'=>'boolean|required',
        ];
    }
    public function messages()
    {
        return [
            'account.not_in' => '帳號已被註冊', 'email.not_in' => '電子郵件已被註冊'
            // 'id.required'=>'缺少id',
            // 'account.required'=>'帳號為必填欄位',
            // 'account.max'=>'帳號最多20位元',
            // 'account.regex'=>"帳號格式錯誤",
            // 'email.required'=>'email為必填欄位',
            // 'email.max'=>'email最多30位元',
            // 'email.email'=>"email格式錯誤",
            // 'name.max'=>'名字最多10位元',
            // 'phone.max'=>'電話最多10位元',
            // 'phone.regex'=>'電話格式錯誤',
            // 'address.max'=>'地址最多50位元',
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
