<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
    Route::group(['prefix' => 'contacts'], function() {
    	
    Route::get('/', 'ContactController@index')->name('contacts');
    Route::get('/show/{contact}', 'ContactController@show')->name('contacts.show');
    Route::post('/create', 'ContactController@store')->name('contacts.store');
    Route::post('/edit/{contact}', 'ContactController@update')->name('contacts.update');
    Route::post('/delete/{contact}', 'ContactController@delete')->name('contacts.delete');
});
//});
