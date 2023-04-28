<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeCategory extends Model
{
    use HasFactory;

    protected $table = "resumes_categories";

    protected $primaryKey = 'id';

    protected $fillable = [
        'profession_categories'
    ];
}
