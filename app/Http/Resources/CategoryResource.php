<?php

namespace InvoiceShelf\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'complete_name' => $this->complete_name,
            'type' => $this->type,
            'image_url' => $this->image_url,
            'parent_id' => $this->parent_id,
            'parent_path' => $this->parent_path,
            'description' => $this->description,
            'company_id' => $this->company_id,
            'amount' => $this->amount,
            'formatted_created_at' => $this->formattedCreatedAt,
            'company' => $this->when($this->company()->exists(), function () {
                return new CompanyResource($this->company);
            }),
        ];
    }
}
