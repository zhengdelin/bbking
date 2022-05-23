<?php

namespace App\Http\Requests\Global;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateStoreInfoRequest extends FormRequest
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
            'name' => "bail|required|max:20|string",
            'eng_name' => 'max:30|string|nullable',
            'url' => 'max:50|string|nullable',
            'address' => 'max:50|string|nullable',
            'phone' => 'max:10|regex:/[0-9]{8,10}/|nullable',
            'email' => 'max:30|email',
            'business_hours'=>'required|max:50|string',
            'description' => 'required|string',
            'logo' => 'required|image',
            'isHeadquarter'=>'required|boolean',
            'status' => 'required|boolean',
        ];  
    }
    public function messages()
    {
        return [
            'description.required'=>'請輸入關於我們'
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'status' => filter_var($this->status, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE),
            'isHeadquarter' => filter_var($this->isHeadquarter, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE)
        ]);
    }
    protected function failedValidation(Validator $validator)
    {
        $message = $validator->errors();
        // dd($message);
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
