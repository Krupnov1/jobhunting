<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileEmployer extends Model
{
    use HasFactory;

    protected $table = 'profiles_employers';

    protected $fillable = [
        'organization', 'locality', 'name', 'last_name', 'phone', 'email' 
    ];
}
