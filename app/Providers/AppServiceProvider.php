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
        view()->composer('_layouts.index', function ($view) {
            $comiketNavItems = Comiket::all()->take(5);
            $vocamasNavItems = Vocamas::all()->take(5);
            $m3NavItems = M3::all()->take(5);

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
