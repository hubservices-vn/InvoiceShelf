<?php

namespace InvoiceShelf\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'name' => [
                'required',
            ],
            'complete_name' => [
                'nullable',
            ],
            'type' => [
                'required',
            ],
            'parent_id' => [
                'nullable',
            ],
            'parent_path' => [
                'nullable',
            ],
            'description' => [
                'nullable',
            ],
        ];
    }

    public function getCategoryPayload()
    {
        return collect($this->validated())
            ->merge([
                'company_id' => $this->header('company'),
            ])
            ->toArray();
    }
}
