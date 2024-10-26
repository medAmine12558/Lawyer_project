<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enum\Casetype;
use App\Enum\Status;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    //
    public function type_of_cases(){
        $casetype=Casetype::cases();
        $casetype = array_map(fn($case) => $case->value, $casetype);
        return $casetype;
    }
    public function type_of_status(){
        $statustype=Status::cases();
        $statustype = array_map(fn($status) => $status->value, $statustype);
        return $statustype;
    }
    public function homepage(){
        return Inertia::render('Homepage',['cases'=>$this->type_of_cases(),'status'=>$this->type_of_status()]);
    }
}
