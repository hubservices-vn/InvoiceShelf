<?php

namespace InvoiceShelf\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use InvoiceShelf\Models\Expense;
use InvoiceShelf\Models\Category;
use InvoiceShelf\Models\User;
use Silber\Bouncer\BouncerFacade;

class CategoryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @return mixed
     */
    public function viewAny(User $user)
    {
        if (BouncerFacade::can('view-expense', Expense::class)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @return mixed
     */
    public function view(User $user, Category $category)
    {
        if (BouncerFacade::can('view-expense', Expense::class) && $user->hasCompany($category->company_id)) {
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
        if (BouncerFacade::can('view-expense', Expense::class)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @return mixed
     */
    public function update(User $user, Category $category)
    {
        if (BouncerFacade::can('view-expense', Expense::class) && $user->hasCompany($category->company_id)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @return mixed
     */
    public function delete(User $user, Category $category)
    {
        if (BouncerFacade::can('view-expense', Expense::class) && $user->hasCompany($category->company_id)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @return mixed
     */
    public function restore(User $user, Category $category)
    {
        if (BouncerFacade::can('view-expense', Expense::class) && $user->hasCompany($category->company_id)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @return mixed
     */
    public function forceDelete(User $user, Category $category)
    {
        if (BouncerFacade::can('view-expense', Expense::class) && $user->hasCompany($category->company_id)) {
            return true;
        }

        return false;
    }
}
