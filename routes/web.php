<?php

use Illuminate\Support\Facades\Route;

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
Route::get('myroute', function () {
    return 'hello';
});
Route::get('/', 'HomeController@index')->name('home');
Route::get('/user/{id}', 'ChatController@show');
Route::post('/user/{id}', 'ChatController@show');
Route::post('/message/{id}', 'MessageController@store');
