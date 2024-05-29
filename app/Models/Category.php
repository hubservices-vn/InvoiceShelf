<?php

namespace InvoiceShelf\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    
    protected $fillable = ['name', 'complete_name', 'company_id', 'type', 'parent_id', 'parent_path', 'description'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['amount', 'formattedCreatedAt'];

    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    // for first level child this will works enough
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    // and here is the trick for nestable child. 
    public static function nestable($categories)
    {
        foreach ($categories as $category) {
            if (!$category->children->isEmpty()) {
                $category->children = self::nestable($category->children);
            }
        }

        return $categories;
    }

    public function allParent()
    {
        $parents = [];
        $parent = $this->parent;
        while ($parent) {
            array_push($parents, $parent);
            $parent = $parent->parent;
        }
        return array_reverse($parents);
    }

    public function allParentIds()
    {
        return array_map(function ($parent) {
            return $parent->id;
        }, $this->allParent());
    }

    public function allParentNames()
    {
        return array_map(function ($parent) {
            return $parent->name;
        }, $this->allParent());
    }

    public function expenses()
    {
        return $this->hasMany(Expense::class, "expense_category_id");
    }

    public function customers()
    {
        return $this->hasMany(Customer::class, "category_id");
    }

    public function items()
    {
        return $this->hasMany(Item::class, "category_id");
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class, "category_id");
    }

    public function payments()
    {
        return $this->hasMany(Payment::class, "category_id");
    }

    public function estimates()
    {
        return $this->hasMany(Estimate::class, "category_id");
    }

    public function recurringInvoices()
    {
        return $this->hasMany(RecurringInvoice::class, "category_id");
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function getFormattedCreatedAtAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', $this->company_id);

        return Carbon::parse($this->created_at)->format($dateFormat);
    }

    public function getAmountAttribute()
    {
        return $this->expenses()->sum('amount');
    }

    public function getImageAttribute()
    {
        $image = $this->getMedia('category')->first();

        if ($image) {
            return asset($image->getUrl());
        }

        return 0;
    }

    public function scopeWhereCompany($query)
    {
        $query->where('company_id', request()->header('company'));
    }

    public function scopeWhereCategory($query, $category_id)
    {
        $query->orWhere('id', $category_id);
    }

    public function scopeWhereCategoryType($query, $category_type)
    {
        $query->orWhere('type', $category_type);
    }

    public function scopeWhereCategoryParent($query, $parent_id)
    {
        $query->orWhere('parent_id', $parent_id);
    }

    public function scopeWhereSearch($query, $search)
    {
        $query->where('name', 'LIKE', '%' . $search . '%');
    }

    public function scopeApplyFilters($query, array $filters)
    {
        $filters = collect($filters);

        if ($filters->get('parent')) {
            $query->whereCategoryParent($filters->get('parent'));
        }

        if ($filters->get('type')) {
            $query->whereCategoryType($filters->get('type'));
        }

        if ($filters->get('category_id')) {
            $query->whereCategory($filters->get('category_id'));
        }

        if ($filters->get('company_id')) {
            $query->whereCompany($filters->get('company_id'));
        }

        if ($filters->get('search')) {
            $query->whereSearch($filters->get('search'));
        }
    }

    public function scopePaginateData($query, $limit)
    {
        if ($limit == 'all') {
            return $query->get();
        }

        return $query->paginate($limit);
    }
}
