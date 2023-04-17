<?php

namespace App\Repositories;

use App\Models\Banner;
use Carbon\Carbon;

class BannerRepository
{
    protected $banner;

    public function __construct(Banner $banner)
    {
        $this->banner = $banner;
    }

    public function listAll()
    {
        return $this->banner->orderBy('ordem')->get();
    }

    public function listActives()
    {
        $query = $this->banner->where('active', 1)
            ->where(function($query){
                return $query->whereNull('periodo_inicio')
                    ->orWhere('periodo_inicio', '<=', Carbon::today()->toDateString());
            })
            ->where(function($query){
                return $query->whereNull('periodo_fim')
                    ->orWhere('periodo_fim', '>=', Carbon::today()->toDateString());
            })
            ->orderBy('ordem')
            ->get()
        ;

        $query->map(function($banner){
            $banner->increment('qtd_views');
            return $banner;
        });

        return $query;
    }
}
