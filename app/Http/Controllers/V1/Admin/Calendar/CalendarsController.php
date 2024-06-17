<?php

namespace InvoiceShelf\Http\Controllers\V1\Admin\Calendar;

use Illuminate\Http\Request;
use InvoiceShelf\Http\Controllers\Controller;
use InvoiceShelf\Http\Requests\CalendarRequest;
use InvoiceShelf\Http\Requests\DeleteCalendarRequest;
use InvoiceShelf\Http\Resources\CalendarResource;
use InvoiceShelf\Models\Calendar;

class CalendarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Calendar::class);

        $limit = $request->has('limit') ? $request->limit : 10;

        $calendars = Calendar::whereCompany()
            ->leftJoin('invoices', 'invoices.id', '=', 'calendars.invoice_id')
            ->leftJoin('estimates', 'estimates.id', '=', 'calendars.estimate_id')
            ->leftJoin('customers', 'customers.id', '=', 'calendars.customer_id')
            ->applyFilters($request->all())
            ->select('calendars.*', 'invoices.invoice_number', 'estimates.estimate_number', 'customers.name')
            ->latest()
            ->paginateData($limit);

        return CalendarResource::collection($calendars);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CalendarRequest $request)
    {
        $this->authorize('create', Calendar::class);

        $calendar = Calendar::createCalendar($request);

        return new CalendarResource($calendar);
    }

    public function show(Request $request, Calendar $calendar)
    {
        $this->authorize('view', $calendar);

        return new CalendarResource($calendar);
    }

    public function update(CalendarRequest $request, Calendar $calendar)
    {
        $this->authorize('update', $calendar);
        $calendar = $calendar->updateCalendar($request, $calendar);
        return new CalendarResource($calendar);
    }

    public function destroy(DeleteCalendarRequest $request, Calendar $calendar)
    {
        $this->authorize('delete', $calendar);

        $calendar->delete();

        return response()->json([
            'success' => true,
        ]);
    }
}
