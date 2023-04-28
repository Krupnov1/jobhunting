<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $table = 'resumes';

    protected $fillable = [
        'resumes_categories', 
        'users_email', 
        'first_name', 
        'last_name', 
        'locality', 
        'education',
        'profession',
        'professional_experience'
    ];
}
