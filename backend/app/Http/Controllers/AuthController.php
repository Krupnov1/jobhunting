<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\UserApplicant;
use App\Models\UserEmployer;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    public function authApplicant(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $userApplicant = UserApplicant::where('email', $fields['email'])->first();

        if (!$userApplicant || !Hash::check($fields['password'], $userApplicant->password)) {
            return response([
                'message' => 'Authorization failed'
            ], 401);
        }

        $token = $userApplicant->createToken('myapptoken')->plainTextToken;

        $response = [
            'name' => 'userApplicant',
            'email' => $userApplicant->email,
            'token' => $token
        ];

        return response($response, 201);
    }


    public function authEmployer(Request $request)
    {
        $fields = $request->validate([
            'organization' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $userEmployer = UserEmployer::where('email', $fields['email'])->first();

        if (!$userEmployer || !Hash::check($fields['password'], $userEmployer->password)) {
            return response([
                'message' => 'Authorization failed'
            ], 401);
        }

        $token = $userEmployer->createToken('myapptoken')->plainTextToken;

        $response = [
            'name' => 'userEmployer',
            'organization' => $userEmployer->organization,
            'email' => $userEmployer->email,
            'token' => $token
        ];

        return response($response, 201);
    }
}
