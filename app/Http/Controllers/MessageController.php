<?php

namespace App\Http\Controllers;

use App\Message;
use Carbon\Carbon;

class MessageController extends Controller
{
    public function store($id)
    {
        $text = request()->validate(['text' => ['string', 'required']]);
        $message = new Message;
        $message->text = $text['text'];
        $message->user_id = auth()->id();
        $message->chat_id = $id;
        $message->save();
    }
}
