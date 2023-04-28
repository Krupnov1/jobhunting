<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VacancyCategory extends Model
{
    use HasFactory;

    protected $table = "vacancy_categories";

    protected $primaryKey = 'id';

    protected $fillable = [
        'categories_profession'
    ];

    public function job() {
        return $this->hasMany(Job::class, 'vacancy_categories_id', 'id');
    }
}
