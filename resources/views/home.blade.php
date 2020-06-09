<x-master>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card canvas">
                    <div class="row">
                        <div class="col-3 pr-0 border-right bord">
                            <div class="card-header text-center">Users</div>
                            <div class="card-body p-0">
                                @forelse($users as $user)
                                    <a class="
                                        user
                                        user{{$user->id}}
                                        {{$loop->last ? '' : 'border-bottom'}}
                                        p-3
                                        d-flex
                                        justify-content-between text-decoration-none"
                                        href="/user/{{$user->id}}"
                                        name="{{$user->id}}">
                                        <div>{{$user->name}}</div>
                                        <span class="unreadAmountBlock{{$user->id}}">
                                            <span class="unreadAmount{{$user->id}}">
                                                {{(\App\Chat::getUnreadMessages($user->id) === 0) ? '' : \App\Chat::getUnreadMessages($user->id)}}
                                            </span>
                                        </span>
                                    </a>
                                @empty
                                    <p>No users yet</p>
                                @endforelse
                            </div>
                        </div>
                        <div class="col-9 pl-0">
                            <div class="card-header text-center">Messages</div>
                            <p class="text-center" id="content">Выберите человека которому вы хотите написать</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-master>
