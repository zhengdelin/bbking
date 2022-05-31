<?php

namespace App\Http\Requests\Global;

use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class ActivityImgRequest extends FormRequest
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
            'status' => 'required|boolean',
            'image' => ['image', Rule::requiredIf(!isset($this->old_image))],
            'old_image' => "required|string",
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'status' => filter_var($this->status, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE)
        ]);
    }
    protected function failedValidation(ValidationValidator $validator)
    {
        $message = $validator->errors();
        // dd($message);
        // return response()->json(['status' => 400, 'error' => $message->first()]);
        throw new HttpResponseException(response()->json(['status' => 400, 'msg' => $message->first()]));
    }
}
