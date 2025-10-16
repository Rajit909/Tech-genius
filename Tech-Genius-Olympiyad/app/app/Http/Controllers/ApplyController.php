<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Models\Student;

class ApplyController extends Controller
{
    public function apply()
    {
        return inertia('apply/apply');
    }

    public function store(Request $request)
    {
        // @todo: Add validation
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.Student::class,
            'phone' => 'required|string|max:255',
            'dob' => 'required|date',
            'gender' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zipcode' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'grade' => 'required|string|max:255',
            'percent' => 'required|string|max:255',     
        ]);

        $student = Student::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'dob' => $request->dob,
            'gender' => $request->gender,
            'city' => $request->city,
            'zipcode' => $request->zipcode,
            'address' => $request->address,
            'state' => $request->state,
            'country' => $request->country,
            'institution' => $request->institution,
            'grade' => $request->grade,
            'percent' => $request->percent,
        ]);

        return redirect('/');
    }
}