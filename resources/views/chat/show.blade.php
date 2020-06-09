<div class="card-body mes-form">
    <div class="messages">
        @forelse($messages as $message)
            @if(auth()->id() === $message->user_id)
                <div class="text-right my-2 d-flex justify-content-end align-items-center">
                    <span class="text-small">{{date_format($message->created_at, "d M H:i")}}</span>
                    <div class="message ml-2">{{$message->text}}</div>
                    @if($message->read_at)
                        &#10003;
                    @endif</div>
            @else
                <div class="text-left my-2 d-flex justify-content-start align-items-center">
                    <div class="message mr-2">{{$message->text}}</div>
                    <span class="text-small">{{date_format($message->created_at, "d M H:i")}}</span>
                    @if(!$message->read_at)
                        <div class="display-none">@markAsRead($message)</div>
                    @endif</div>
            @endif
        @empty
            <p>Пока что нет сообщений</p>
        @endforelse
    </div>
    <div class="form-text">
        <form
            action="/message/{{$chatId}}"
            method="post"
            class="d-flex justify-content-around align-items-end message-form"
            name="{{$userId}}">
            @csrf
            <textarea name="message" id="message" placeholder="Напишите сообщение"></textarea>
            <div class="down btn btn-success">Вниз</div>
            <button type="submit" class="btn btn-primary message-btn">Отправить</button>
        </form>
    </div>
</div>
