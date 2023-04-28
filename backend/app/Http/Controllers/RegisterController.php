<?php

namespace App\Http\Controllers;

use App\Models\ProfileApplicant;
use App\Models\ProfileEmployer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\UserApplicant;
use App\Models\UserEmployer;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function registerApplicant(Request $request) 
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'last_name' => 'required|string',
            'phone' => 'required',
            'locality' => 'required|string',
            'email' => 'required|string|unique:users_applicants,email|unique:profiles_applicants,email',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string'
        ]);

        $userApplicant = UserApplicant::create([
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'password_confirmation' => bcrypt($fields['password_confirmation'])
        ]);

        $profileApplicant = ProfileApplicant::create([
            'name' => $fields['name'],
            'last_name' => $fields['last_name'],
            'phone' => $fields['phone'],
            'email' => $fields['email'],
            'locality' => $fields['locality']
        ]);

        $token = $userApplicant->createToken('myapptoken')->plainTextToken;

        $response = [
            'profileApplicant' => $profileApplicant,
            'userApplicant' => $userApplicant,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function registerEmployer(Request $request) {
        $fields = $request->validate([
            'organization' => 'required|string',
            'locality' => 'required|string',
            'name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users_employers,email|unique:profiles_employers,email',
            'phone' => 'required',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string'
        ]);

        $userEmployer = UserEmployer::create([
            'organization' => $fields['organization'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'password_confirmation' => bcrypt($fields['password_confirmation'])
        ]);

        $profileEmployer = ProfileEmployer::create([
            'organization' => $fields['organization'],
            'locality' => $fields['locality'],
            'name' => $fields['name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'phone' => $fields['phone']
        ]);

        $token = $userEmployer->createToken('myapptoken')->plainTextToken;

        $response = [
            'profileApplicant' => $profileEmployer,
            'userApplicant' => $userEmployer,
            'token' => $token
        ];

        return response($response, 201);
    }
}
