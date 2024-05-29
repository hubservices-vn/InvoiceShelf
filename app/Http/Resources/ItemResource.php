<?php

namespace InvoiceShelf\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'unit_id' => $this->unit_id,
            'company_id' => $this->company_id,
            'category_id' => $this->category_id,
            'creator_id' => $this->creator_id,
            'currency_id' => $this->currency_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'tax_per_item' => $this->tax_per_item,
            'formatted_created_at' => $this->formattedCreatedAt,
            'fields' => $this->when($this->fields()->exists(), function () {
                return CustomFieldValueResource::collection($this->fields);
            }),
            'unit' => $this->when($this->unit()->exists(), function () {
                return new UnitResource($this->unit);
            }),
            'category' => $this->when($this->category()->exists(), function () {
                return new CategoryResource($this->category);
            }),
            'company' => $this->when($this->company()->exists(), function () {
                return new CompanyResource($this->company);
            }),
            'taxes' => $this->when($this->taxes()->exists(), function () {
                return TaxResource::collection($this->taxes);
            }),
            'currency' => $this->when($this->currency()->exists(), function () {
                return new CurrencyResource($this->currency);
            }),
        ];
    }
}
