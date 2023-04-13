<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    protected $table = 'banners';

    public static $storage = 'banners';

    protected $fillable = [
        'public_id',
        'image',
        'mobile_image',
        'click_count',
        'view_count',
        'start_date',
        'end_date',
        'url',
        'target_blank',
        'title',
        'order',
        'active',
        'local',
    ];

    protected $dates = ['start_date', 'end_date'];

    public function getStartDateAttribute($value) {
        return $value;
    }

    public function getEndDateAttribute($value) {
        return $value;
    }
}
