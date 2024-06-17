<?php

namespace InvoiceShelf\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CalendarRequest extends FormRequest
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
        $rules = [
            'title' => [
                'required',
            ],
            'description' => [
                'nullable',
            ],
            'start' => [
                'required',
            ],
            'end' => [
                'required',
            ],
            'estimate_id' => [
                'nullable',
            ],
            'invoice_id' => [
                'nullable',
            ],
            'customer_id' => [
                'nullable',
            ],
        ];

        return $rules;
    }

    public function getCalendarPayload()
    {
        return collect($this->validated())
            ->merge([
                'creator_id' => $this->user()->id,
                'company_id' => $this->header('company'),
            ])
            ->toArray();
    }
}
