<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function userResumeAdd(Request $request) 
    {
        $fields = $request->validate([
            'category' => 'required|string',
            'email' => 'required|string',
            'name' => 'required|string',
            'last_name' => 'required|string',
            'locality' => 'required|string',
            'education' => 'required|string',
            'profession' => 'required|string',
            'professionalExperience' => 'required|string'
        ]);

        $userResume = Resume::create([
            'resumes_categories' => $fields['category'],
            'users_email' => $fields['email'],
            'first_name' => $fields['name'],
            'last_name' => $fields['last_name'],
            'locality' => $fields['locality'],
            'education' => $fields['education'],
            'profession' => $fields['profession'],
            'professional_experience' => $fields['professionalExperience']
        ]);

        $response = [
            'userResume' => $userResume,
        ];

        return response($response, 201);
    }

    public function userVacancyAdd(Request $request) 
    {
        $fields = $request->validate([
            'category' => 'required|string',
            'email' => 'required|string',
            'locality' => 'required|string',
            'organization' => 'required|string',
            'profession' => 'required|string',
            'payment' => 'required',
            'description' => 'required|string',
            'requirements' => 'required|string'
        ]);

        $userVacancy = Job::create([
            'vacancy_categories' => $fields['category'],
            'users_employers_email' => $fields['email'],
            'town' => $fields['locality'],
            'organization' => $fields['organization'],
            'profession' => $fields['profession'],
            'payment' => $fields['payment'],
            'vacancy_description' => $fields['description'],
            'requirements' => $fields['requirements']
        ]);

        $response = [
            'userVacancy' => $userVacancy,
        ];

        return response($response, 201);
    }
}
