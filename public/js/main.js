// $(document).ready(function() {
//     $('.user').click(function(e) {
        // let message = document.getElementsByClassName("mes");
        // for (let i = 0; i < message.length; i++) {
        //     message[i].style.display = "block";
        // }

        // Stop form from sending request to server
        // e.preventDefault();
        // let btn = $(this);
        // $.ajax({
        //     method: "GET",
        //     url: "/chat/"+btn.val(),
        // });
        // console.log(btn.val());
        // let XHR = new XMLHttpRequest();
        // setTimeout(function () {
        //     window.location.href = "/book/" + btn[0].attributes[0].value;             });
//     })
// });

// $(document).ready(function () {
//     $('.message-btn').click(function() {
//         console.log("asdasda");
//         return false;
        // let btn = $(this);
        // $.ajax({
        //     method: "GET",
        //     url: "/chat/"+btn.val(),
        // });
        // console.log(btn.val());
        // let XHR = new XMLHttpRequest();
        // setTimeout(function () {
        //     window.location.href = "/book/" + btn[0].attributes[0].value;             });
//     })
// });
$(document).ready(function() {
    let startFrom;
    let inProgress = false;

    $('.user').click(function(){

        startFrom = 20;
        var toLoad = $(this).attr('href')+' .card-body';
        $('#content').hide('fast',loadContent);
        $("#content").on('click', '.down', function () {
            $(".messages").scrollTop($(".messages")[0].scrollHeight);
        });
        setTimeout(function(){
            $('.down').trigger('click');
        }, 500);
        let userId = $(this).attr('name');
        $('.unreadAmountBlock' + userId).load('/ .unreadAmount' + userId);

        function loadContent() {
            $('#content').load(toLoad,'',showNewContent())
        }

        function showNewContent() {
            $('#content').show('normal');
        }

        return false;
    });

    $("body").on('click', '.message-btn', function (e) {
        e.preventDefault();
        let userId = $('.message-form').attr('name');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.post($('.message-form').attr('action'), {text: $("#message").val()}, function () {
            $("#message").val("");
            $('#content').load($(".user" + userId).attr('href')+' .card-body','', function () {
                $("body").on('click', '.down', function () {
                    $(".messages").scrollTop($(".messages")[0].scrollHeight);
                });
                $('.down').trigger('click');
            });
        });
    });

    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            if ($(".messages").scrollTop() === 0 && !inProgress) {
                inProgress = true;
                let userId = $('.message-form').attr('name');
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $('#content').load($(".user" + userId).attr('href')+' .card-body', {index : startFrom}, function () {
                    startFrom += 20;
                    inProgress = false;
                });
            }
        }
    });
});
