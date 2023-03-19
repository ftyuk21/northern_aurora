// 存取<video>
const video = document.querySelector('#video_video video');
const audio = document.querySelector('audio');
const Btn = document.getElementsByClassName('vbtn');
let btnname = [];
let one = true; // one的用意是因為 一秒裡面有很多毫秒

// 加上監聽器
video.addEventListener('click', togglePlay);

// 切換播放, 暫停
function togglePlay(e) {
    //video[video.paused ? 'play' : 'pause' ]();
    if (video.paused) {
        var backMusic = document.getElementById('back_music');
        backMusic.pause();
        $("#videoControl").attr("src","/Video/play.png");
        $('#videoControl').css('display','block')
        setTimeout(function(){
            $('#videoControl').css('display','none')
        },1000)
        one = true;
        video.play();
        audio.volume = 0; // 設置聲音
    }
    else {
        var backMusic = document.getElementById('back_music');
        backMusic.play();
        $("#videoControl").attr("src","/Video/stop.png");
        $('#videoControl').css('display','block')
        $('#videoControl').css('height','13%')
        setTimeout(function(){
            $('#videoControl').css('display','none')
        },1000)
        one = true;
        video.pause();
        audio.volume = 1; // 設置聲音
    }
}
let nowTime ="";
video.addEventListener("timeupdate", function () {
    nowTime = Math.floor(video.currentTime / 60) + "：" + Math.floor(video.currentTime % 60);  // 分:秒
    console.log(nowTime)
    if (nowTime == "1：32" && one) {
        one = false;
        video.pause();
        btnname = ["檜木", "原太平山"];
        setBtn();
    } else if (nowTime == "3：37" && one) {//檜木線
        one = false;
        video.pause();
        btnname = ["蹦蹦車", "雲海咖啡"];
        setBtn();
    } else if (nowTime == "5：37" && one) {//太平山線
        one = false;
        video.pause();
        btnname = ["蹦蹦車", "雲海咖啡"];
        setBtn();
    } else if (nowTime == "1：48") {//太平山過渡部分
        let minutes = 3; let seconds = 51;
        video.currentTime = minutes * 60 + seconds;
    } else if (nowTime == "7：19") {//蹦蹦車結束
        let minutes = 8; let seconds = 33;
        video.currentTime = minutes * 60 + seconds;
    } else if (nowTime == "0：29" && one) { // 手1 0:29
        one = false;
        $('#hand').css('display', 'block');
        video.pause();
        setHand();
    }
    else if (nowTime == "0：36" && one) { // 放大鏡1 0:36
        one = false;
        $('#hand').css('display', 'block');
        $('#hand').css('bottom', '55%');
        $('#hand').css('right', '38%');
        video.pause();
        setHand();
    }
    else if (nowTime == "1：11" && one) { // 手2 1:11
        one = false;
        $('#hand').css('display', 'block');
        $('#hand').css('bottom', '34%');
        $('#hand').css('right', '50%');
        video.pause();
        setHand();
    }
    else if (nowTime == "4：14" && one) { // 手3 4:14
        one = false;
        $('#hand').css('display', 'block');
        $('#hand').css('bottom', '52%');
        $('#hand').css('right', '66%');
        video.pause();
        setHand();
    }
    else if (nowTime == "7：27" && one) { // 放大鏡2 7:27
        one = false; 
        $('#hand').css('display', 'block');
        $('#hand').css('bottom', '38%');
        $('#hand').css('right', '44%');
        video.pause();
        setHand();
    }

});

function setBtn() {
    document.getElementById("videoBtn").style.display = "block";
    for (let i = 0; i < Btn.length; i++) {
        Btn[i].innerHTML = "";
        const btn = {
            container: Btn[i], // Required
            path: '/Video/太平山影片/' + btnname[i] + '.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "btn" + (i + 1)
        }

        let clickBtn = lottie.loadAnimation(btn);

        $(Btn[i]).hover(function () {
            clickBtn.play();
        }, function () { clickBtn.stop(); });

        $(Btn[i]).click(function () {
            let minutes = 0;
            let seconds = 0;
            console.log(btnname[i]);
            switch (btnname[i]) {
                case "檜木":
                    minutes = 1; seconds = 39;
                    break;
                case "原太平山":
                    minutes = 1; seconds = 39;
                    break;
                case "蹦蹦車":
                    minutes = 5; seconds = 47;
                    break;
                case "雲海咖啡":
                    minutes = 7; seconds = 21;
                    break;
            }
            one = true;
            document.getElementById("videoBtn").style.display = "none";
            video.currentTime = minutes * 60 + seconds;
            video.play();
        });
    }
}

function setHand() {
    $('#hand').click(function () {
        let minutes = 0;
        let seconds = 0;
        $('#hand').css('display', 'none');
        one = true;
        video.currentTime = nowTime.split("：")[0] *60 + nowTime.split("：")[1]*1 + 1;
        video.play();
    });
}