<?php

namespace InvoiceShelf\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use InvoiceShelf\Models\Calendar;
use InvoiceShelf\Models\User;
use Silber\Bouncer\BouncerFacade;

class CalendarPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @return mixed
     */
    public function viewAny(User $user)
    {
        if (BouncerFacade::can('view-calendar', Calendar::class)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @return mixed
     */
    public function view(User $user, Calendar $calendar)
    {
        if (BouncerFacade::can('view-calendar', $calendar) && $user->hasCompany($calendar->company_id)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can create models.
     *
     * @return mixed
     */
    public function create(User $user)
    {
        if (BouncerFacade::can('create-calendar', Calendar::class)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @return mixed
     */
    public function update(User $user, Calendar $calendar)
    {
        if (BouncerFacade::can('edit-calendar', $calendar) && $user->hasCompany($calendar->company_id) && $user->isOwner()) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @return mixed
     */
    public function delete(User $user, Calendar $calendar)
    {
        if (BouncerFacade::can('delete-calendar', $calendar) && $user->hasCompany($calendar->company_id) && $user->isOwner()) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @return mixed
     */
    public function restore(User $user, Calendar $calendar)
    {
        if (BouncerFacade::can('delete-calendar', $calendar) && $user->hasCompany($calendar->company_id) && $user->isOwner()) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @return mixed
     */
    public function forceDelete(User $user, Calendar $calendar)
    {
        if (BouncerFacade::can('delete-calendar', $calendar) && $user->hasCompany($calendar->company_id) && $user->isOwner()) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete models.
     *
     * @return mixed
     */
    public function deleteMultiple(User $user)
    {
        if (BouncerFacade::can('delete-calendar', Calendar::class)) {
            return true;
        }

        return false;
    }
}
