<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{

    public static $startFrom = 20;

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class)->latest('created_at')->limit(self::$startFrom)->get()->reverse();
    }

    public static function addIfNeeded(int $id)
    {
        $currentChatId = 0;
        $needChat = true;
        $chats = auth()->user()->chats;
        foreach ($chats as $chat) {
            if (User::find($id)->chats->pluck('id')->contains($chat->id)) {
                $needChat = false;
                $currentChatId = $chat->id;
            }
        }
        if ($needChat) {
            $chat = new Chat;
            $chat->save();
            $currentChatId = $chat->id;
            $chat->users()->attach([$id, auth()->id()]);
        }
        return $currentChatId;
    }

    public static function getUnreadMessages($id)
    {
        return self::find(self::addIfNeeded($id))->messages()->filter(function ($item) use ($id){
            return ($item->read_at === null && $item->user_id === $id);
        })->count();
    }
}
