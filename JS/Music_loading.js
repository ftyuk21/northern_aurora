let bgIMG = $(document).attr('title');

if (bgIMG.includes("太平山")) {
    $('body').append('<audio id="back_music" muted="true" autoplay loop=true src="/Music/mountain_music.mp3" ></audio>');
} else if (bgIMG.includes("南方澳")) {
    $('body').append('<audio id="back_music" muted="true" autoplay loop=true src="/Music/ocean_music.mp3" ></audio>');
} else if (bgIMG.includes("日出北橫")) {
    $('body').append('<audio id="back_music" muted="true" autoplay loop=true src="/Music/sun_music.mp3" ></audio>');
}
else if (bgIMG.includes("關於我們")) {
    $('body').append('<audio id="back_music" muted="true" autoplay loop=true src="/Music/aboutus.mp3" ></audio>');
    var backMusic = document.getElementById('back_music').volume = 0.5;
}

let audio_id = document.getElementsByTagName('audio')[0].id;
let playmusic = document.getElementById(audio_id);
let play = false;
let pauseOrPlay = true; // true是正在撥放 false是暫停撥放



playmusic.oncanplaythrough = function(){
    setTimeout(function(){
        playmusic.muted = false;
        playmusic.play();
    },4000)

    $('#backgroundMusic').click(function () {
        if (pauseOrPlay) {
            playmusic.pause();
            pauseOrPlay = false;
            $('#musicIcon').remove();
            $('#backgroundMusic').append('<svg id="musicIcon" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/></svg>');
        } else {
            playmusic.play();
            pauseOrPlay = true;
            $('#musicIcon').remove();
            $('#backgroundMusic').append('<svg id="musicIcon" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path></svg>');
        }
    });
}

// playmusic.oncanplaythrough = function(){
//     // playmusic.play();
//     // playmusic.muted = false;
// }


// playmusic.oncanplaythrough = function () {
//     setInterval(function () {
//         $('#backgroundMusic').click(function () {
//             if (pauseOrPlay) {
//                 console.log('a')
//                 playmusic.pause();
//                 pauseOrPlay = false;
//                 $('#musicIcon').remove();
//                 $('#backgroundMusic').append('<svg id="musicIcon" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/></svg>');
//             } else {
//                 console.log('b');
//                 playmusic.play();
//                 pauseOrPlay = true;
//                 $('#musicIcon').remove();
//                 $('#backgroundMusic').append('<svg id="musicIcon" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path></svg>');
//             }
//         });
//         if (play) {
//             return;
//         }
//         playmusic.currentTime = 0;
//         playmusic.volume = 0.5;
//         playmusic.muted = false;  //是否要靜音
//         play = true;
//         console.log('Play Music');

//         setTimeout(function () {
//             play = false;
//             playmusic.muted = true;
//         }, playmusic.duration * 1000);
//     }, 1000);
// };