<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['domain' => 'www.doujinreleas.es'], function () {
	Route::get('/', 'PageController@index');
});

Route::group(['domain' => '{event}.doujinreleas.es'], function () {
	Route::get('/', 'EventController@index');
	Route::get('/archive', 'EventController@archive');
	Route::get('{id}', 'EventController@specific');
});

Route::group(['prefix' => 'api/v1'], function () {
	Route::resource('comiket', 'Api\ComiketController');
	Route::get('comiket/{id}/releases', 'Api\ComiketController@releases');

	Route::resource('vocamas', 'Api\VocamasController');
	Route::get('vocamas/{id}/releases', 'Api\VocamasController@releases');

	Route::resource('m3', 'Api\M3Controller');
	Route::get('m3/{id}/releases', 'Api\M3Controller@releases');

	Route::resource('releases', 'Api\ReleaseController');
	Route::get('releases/{id}/comiket', 'Api\ReleaseController@comiket');
	Route::get('releases/{id}/vocamas', 'Api\ReleaseController@vocamas');
	Route::get('releases/{id}/m3', 'Api\ReleaseController@m3');
});

Route::resource('user', 'UserController');
