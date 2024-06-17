<?php

namespace InvoiceShelf\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CalendarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'start' => $this->start,
            'end' => $this->end,
            'company_id' => $this->company_id,
            'estimate_id' => $this->estimate_id,
            'creator_id' => $this->creator_id,
            'customer_id' => $this->customer_id,
            'invoice_id' => $this->invoice_id,
            'estimate' => $this->when($this->estimate()->exists(), function () {
                return new EstimateResource($this->estimate);
            }),
            'invoice' => $this->when($this->invoice()->exists(), function () {
                return new InvoiceResource($this->invoice);
            }),
            'company' => $this->when($this->company()->exists(), function () {
                return new CompanyResource($this->company);
            }),
            'user' => $this->when($this->user()->exists(), function () {
                return new UserResource($this->user);
            }),
            'customer' => $this->when($this->customer()->exists(), function () {
                return new CustomerResource($this->customer);
            }),
        ];
    }
}
