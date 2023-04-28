<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $table = 'jobs';

    protected $fillable = [
        'vacancy_categories',
        'users_employers_email',
        'categories_profession',
        'town',
        'organization', 
        'profession', 
        'payment', 
        'vacancy_description',
        'requirements',
    ];
}
