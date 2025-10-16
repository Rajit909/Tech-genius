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

        
        // @todo: Save data

        return redirect('/');
    }
}