<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use App\Models\ResumeCategory;
use Illuminate\Http\Request;

class ResumeController extends Controller
{
    public function index() 
    {
        return response()->json(Resume::get(), 200);   
    }

    public function resumeCategoryShow() {
        return response()->json(ResumeCategory::get(), 200);
    }

    public function show(int $id)
    {
        return response()->json(Resume::find($id)
            ->where('resumes.id', '=', $id)
            ->get(), 200
        );
    }
}
