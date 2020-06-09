<?php

namespace App\Http\Controllers;

use App\Chat;
use App\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{


    /**
     * @param $id int User id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(int $id)
    {
        if (request('index')) Chat::$startFrom = request('index');
        $chatId = Chat::addIfNeeded($id);
        return view('chat.show', [
            'messages' => Chat::find($chatId)->messages(),
            'chatId' => $chatId,
            'userId' => $id
        ]);
    }
}
