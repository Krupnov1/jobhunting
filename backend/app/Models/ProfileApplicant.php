<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileApplicant extends Model
{
    use HasFactory;

    protected $table = 'profiles_applicants';

    protected $fillable = [
        'name', 'last_name', 'phone', 'email', 'locality' 
    ];
}
