<?php



namespace App\Enum;



enum Status:string {
    case In_progress = 'in_progress';
    case Finished = 'finished';
    case Cancelled = 'cancelled';
}
