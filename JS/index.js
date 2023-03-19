$(document).ready(function () {
    // $(".menuContainer").load("menu.html");
    // document.referrer 讀取上一頁面的url
    if(document.referrer != ""){
        $('#videoContainer').css('display', 'block');
        $('#container').remove();

        var vid = document.getElementById("video");
        vid.currentTime = 20;
        vid.play();

        vid.addEventListener('timeupdate', function () {
            var second = parseInt(vid.currentTime);
            if (second == 20) {
                $(".menuContainer").css('visibility','visible');
                $('#musicIcon').remove();
                $('#sout').css('display', 'block');
                $('#tai').css('display', 'block');
            }
        });

        vid.addEventListener('ended', function () {
            vid.currentTime = 20;
            vid.play();
        });
    }else{
        var load = {
            container: document.getElementById('container'),
            path: '/Video/indexVideo/loading.json',
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "load",
        }
        var loadAnim = lottie.loadAnimation(load);
    
        setTimeout(function () {
            $('#videoContainer').css('display', 'block');
            $('#container').remove();
    
            var vid = document.getElementById("video");
            vid.play();
    
            vid.addEventListener('timeupdate', function () {
                var second = parseInt(vid.currentTime);
                if (second == 20) {
                    $(".menuContainer").css('visibility','visible');
                    $('#musicIcon').remove();
                    $('#sout').css('display', 'block');
                    $('#tai').css('display', 'block');
                }
            });
    
            vid.addEventListener('ended', function () {
                vid.currentTime = 20;
                vid.play();
            });
        }, 5000);
    }

});