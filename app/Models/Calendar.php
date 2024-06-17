<?php

namespace InvoiceShelf\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'customer_id', 'creator_id', 'estimate_id', 'invoice_id', 'company_id', 'start', 'end'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function estimate()
    {
        return $this->belongsTo(Estimate::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function getFormattedCreatedAtAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', $this->company_id);

        return Carbon::parse($this->created_at)->format($dateFormat);
    }

    public function getFormattedStartAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', $this->company_id);

        return Carbon::parse($this->start)->format($dateFormat);
    }

    public function getFormattedEndAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', $this->company_id);

        return Carbon::parse($this->end)->format($dateFormat);
    }

    public function scopeWhereCompany($query)
    {
        $query->where('calendars.company_id', request()->header('company'));
    }

    public function scopeWhereCalendar($query, $calendar_id)
    {
        $query->orWhere('id', $calendar_id);
    }

    public function scopeWhereStart($query, $start)
    {
        $query->where('start', '>', $start);
    }

    public function scopeWhereEnd($query, $end)
    {
        $query->where('end', '<', $end);
    }

    public function scopeApplyFilters($query, array $filters)
    {
        $filters = collect($filters);

        if ($filters->get('calendar_id')) {
            $query->whereCalendar($filters->get('calendar_id'));
        }

        if ($filters->get('company_id')) {
            $query->whereCompany($filters->get('company_id'));
        }

        if ($filters->get('start')) {
            $query->whereStart($filters->get('start'));
        }

        if ($filters->get('end')) {
            $query->whereEnd($filters->get('end'));
        }
    }

    public function scopePaginateData($query, $limit)
    {
        if ($limit == 'all') {
            return $query->get();
        }

        return $query->paginate($limit);
    }

    public static function createCalendar($request)
    {
        $data = $request->getCalendarPayload();

        $calendar = self::create($data);
        $calendar->save();

        return $calendar;
    }

    public function updateCalendar($request, $calendar)
    {
        $calendar->update($request->getCalendarPayload());

        return $calendar;
    }

}
