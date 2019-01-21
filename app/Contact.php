<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model {
    
    protected $fillable = [
        'email',
        'first_name',
        'last_name',
        'function',
        'birth_date',
        'city',
        'phone',
        'company_name',
        'company_address'
    ];
}
