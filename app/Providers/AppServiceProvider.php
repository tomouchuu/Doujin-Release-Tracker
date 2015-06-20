<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\DoujinReleaseTracker\Comiket\Comiket;
use App\DoujinReleaseTracker\Vocamas\Vocamas;

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

            $view->with([
                'comiketNavItems' => $comiketNavItems,
                'vocamasNavItems' => $vocamasNavItems
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
