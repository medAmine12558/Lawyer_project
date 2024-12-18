<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enum\Casetype;
use App\Enum\Status;
use Inertia\Inertia;
use App\Models\Appointment;

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
        return Inertia::render('Homepage',['cases'=>$this->type_of_cases()]);
    }
    public function add_consultation(Request $R) {
        $validatedData = $R->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'tele' => 'required|string|min:8|max:15',
            'case_type' => 'required|string|max:255',
        ]);
        $validatedData['created_date'] = now()->toDateString();

        $appoin = Appointment::create($validatedData);

        return response()->json('success');
     }
     public function adminpage() {
        $appointments = Appointment::paginate(10);
        return Inertia::render('Adminpage', ['appointments' => $appointments,'statustypes'=>$this->type_of_status(),'casetypes'=>$this->type_of_cases()]);
    }
    public function filter(Request $r) {
        $status=$r->input('status');
        $caseType=$r->input('case_type');
        $date=$r->input('date');

        if($date=="null-null-null" || $date=="NaN-NaN-NaN"){
            $date=null;
        }

        $query = Appointment::query();
        if($status && !$caseType && !$date){
            $query->where('status',$status);
        }else if($caseType && !$status && !$date){
            $query->where('case_type',$caseType);
        }else if($date && !$caseType && !$status){
            $query->where('created_date',$date);
        }else if($status && $caseType && !$date){
            $query->where('status',$status)->where('case_type',$caseType);
        }else if($status && !$caseType && $date){
            $query->where('status',$status)->where('created_date',$date);
        }else if(!$status && $caseType && $date){
            $query->where('case_type',$caseType)->where('created_date',$date);
        }else if($status && $caseType && $date){
            $query->where('status',$status)->where('case_type',$caseType)->where('created_date',$date);
        }
        $appointments = $query->paginate(10);

        return response()->json($appointments);
    }

    public function deletewithgroup(Request $r){
        $checkeddelete = $r->input('checkeddelete');
        foreach($checkeddelete as $a){
            $appointment = Appointment::find($a);
            $appointment->delete();
        }
        return response()->json('success');
    }

    public function editlabel(Request $r){
        $id=$r->input('id');
        $status=$r->input('status');
        $appointment = Appointment::find($id);
        $appointment->update([
            'status'=>$status
        ]);
        return response()->json('success');
    }
}
