<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\VacancyCategory;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index() 
    {
        return response()->json(Job::get(), 200);
    }

    public function vacancyCategoryShow() {
        return response()->json(VacancyCategory::get(), 200);
    }

    public function vacanciesOutput($id)
    {
        return response()->json(Job::query()
            ->join('vacancy_categories', 'jobs.vacancy_categories', '=', 'vacancy_categories.categories_profession')
            ->select('jobs.*', 'vacancy_categories.categories_profession')
            ->where('vacancy_categories.id', '=', $id)
            ->get(), 200
        );
    }

    public function vacancyShow($id) 
    {
        return response()->json(Job::find($id)
            ->where('jobs.id', '=', $id)
            ->get(), 200
        );
    }
}
