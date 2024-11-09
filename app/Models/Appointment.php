<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enum\Casetype;
use  App\Enum\Status;

class Appointment extends Model
{
    //
    protected $fillable = [
        'full_name',
        'email',
        'tele',
        'case_type',
        'status',
        'created_date'
    ];
    protected $casts = [

        'case_type' => Casetype::class,
        'status' => Status::class
    ];
    public $timestamps = false; 
}
