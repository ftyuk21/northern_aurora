$(document).ready(function () {
    for(var i=1;i<=5;i++){
        $('body').append('<audio class="eggMusic" id="egg'+i+'" src="/Music/Taiping/egg'+i+'.mp3" ></audio>');
        // $('body').append('<audio id="egg'+i+'" src="/Music/Southout/南方澳.mp3" ></audio>');
    }
    var anim = document.getElementsByClassName('tree');
    var animContainer = [];
    for (var i = 0; i < anim.length; i++) {
        console.log(anim[i]);
        var trees = {
            container: anim[i], // Required
            path: '/JSON/TaiPing/樹'+(i+1)+'.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "trees"
        }
        animContainer[i] = trees;
    }
    var tree1 = lottie.loadAnimation(animContainer[0]);
    var tree2 = lottie.loadAnimation(animContainer[1]);
    var tree3 = lottie.loadAnimation(animContainer[2]);
    var tree4 = lottie.loadAnimation(animContainer[3]);
    var tree5 = lottie.loadAnimation(animContainer[4]);

    $('.tree').hover(function () {
        switch (this.id) {
            case 'tree1':
                tree1.play();
                break;
            case 'tree2':
                tree2.play();
                break;
            case 'tree3':
                tree3.play();
                break;
            case 'tree4':
                tree4.play();
                break;
            case 'tree5':
                tree5.play();
                break;
            default:
                break;
        }
    }, function () {
        tree1.stop();
        tree2.stop();
        tree3.stop();
        tree4.stop();
        tree5.stop();
    })


    function checkMusic(){
        var mu = document.getElementsByClassName('eggMusic');
        for(var i=0;i<mu.length;i++){
            if(mu[i].paused){
                //暫停中
            }
            else{
                //播放中
                // console.log(mu[i]);
                mu[i].pause();
            }
        }
    }


    $('.tree').click(function () {
        console.log("click");
        switch (this.id) {
            case 'tree1':
                checkMusic();
                var music = document.getElementById('egg1');
                music.volume = 1;
                music.play();
                break;
            case 'tree2':
                checkMusic();
                var music = document.getElementById('egg2');
                music.volume = 1;
                music.play();
                break;
            case 'tree3':
                checkMusic();
                var music = document.getElementById('egg3');
                music.volume = 0.9;
                music.play();
                break;
            case 'tree4':
                checkMusic();
                var music = document.getElementById('egg4');
                music.volume = 0.9;
                music.play();
                break;
            case 'tree5':
                checkMusic();
                var music = document.getElementById('egg5');
                music.volume = 1;
                music.play();
                break;
            default:
                break;
        }
    })

})