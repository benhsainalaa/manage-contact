<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();
Route::get('/manage', function () {
    return view('index');
});
Route::middleware('auth:api')->get('/', function (Request $request) {
//Route::get('/home', 'HomeController@index')->name('home');
Route::group(['prefix' => 'contacts'], function() {
	
    Route::get('/', 'ContactController@index')->name('contacts');
    Route::get('/show/{contact}', 'ContactController@show')->name('contacts.show');
    Route::post('/create', 'ContactController@store')->name('contacts.store');
    Route::post('/edit/{contact}', 'ContactController@update')->name('contacts.update');
    Route::post('/delete/{contact}', 'ContactController@delete')->name('contacts.delete');
});
});
