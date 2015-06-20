<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\DoujinReleaseTracker\Comiket\Comiket;
use App\DoujinReleaseTracker\Vocamas\Vocamas;
use App\DoujinReleaseTracker\M3\M3;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('_layouts.event', function ($view) {
            $comiketNavItems = Comiket::orderBy('_id', 'desc')->take(5)->get();
            $vocamasNavItems = Vocamas::orderBy('_id', 'desc')->take(5)->get();
            $m3NavItems = M3::orderBy('_id', 'desc')->take(5)->get();

            $view->with([
                'comiketNavItems' => $comiketNavItems,
                'vocamasNavItems' => $vocamasNavItems,
                'm3NavItems' => $m3NavItems
            ]);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
