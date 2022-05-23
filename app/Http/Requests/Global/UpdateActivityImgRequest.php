<?php

namespace App\Http\Requests\Global;

use Illuminate\Foundation\Http\FormRequest;

class UpdateActivityImgRequest extends FormRequest
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
            'id' => 'bail|required|numeric',
            'old_image'=>"required|string",
            'status'=>['required','boolean'],
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'status'=>filter_var($this->status,FILTER_VALIDATE_BOOLEAN,FILTER_NULL_ON_FAILURE)
        ]);
    }
}
