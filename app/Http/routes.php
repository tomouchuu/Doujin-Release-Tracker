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

Route::group(['domain' => 'doujinreleas.es'], function () {
	Route::get('/', function () {
		return view('welcome');
	});
});

Route::group(['domain' => 'comiket.doujinreleas.es'], function () {
	Route::get('/', 'ComiketController@index');
	Route::get('/{id}', 'ComiketController@specific');
});

Route::resource('user', 'UserController');

Route::group(['prefix' => 'api/v1'], function () {
	Route::resource('comiket', 'Api\ComiketController');
	Route::get('comiket/{id}/releases', 'Api\ComiketController@releases');
	Route::resource('releases', 'Api\ReleaseController');
	Route::get('releases/{id}/comiket', 'Api\ReleaseController@comiket');
});
