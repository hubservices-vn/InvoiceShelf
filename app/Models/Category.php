<?php

namespace InvoiceShelf\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'company_id', 'description'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['amount', 'formattedCreatedAt'];

    public function expenses()
    {
        return $this->hasMany(Expense::class, "expense_category_id");
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
        $query->where('name', 'LIKE', '%'.$search.'%');
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
