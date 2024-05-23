<?php

namespace InvoiceShelf\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use InvoiceShelf\Notifications\CustomerMailResetPasswordNotification;
use InvoiceShelf\Traits\HasCustomFieldsTrait;
use Laravel\Sanctum\HasApiTokens;
use Silber\Bouncer\Database\HasRolesAndAbilities;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Catalog extends Authenticatable implements HasMedia
{
    use HasApiTokens;
    use HasCustomFieldsTrait;
    use HasFactory;
    use HasRolesAndAbilities;
    use InteractsWithMedia;
    use Notifiable;

}
