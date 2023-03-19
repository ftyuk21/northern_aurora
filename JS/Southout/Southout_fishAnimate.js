$(document).ready(function(){
    var peopleFish = {
        container: document.getElementById('peoplefish'), // Required
        path: '/JSON/Southout/人魚.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: false, // Optional
        name: "fish"
    };

    var fish = {
        container: document.getElementById('btnfish'), // Required
        path: '/JSON/Southout/fish2.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "fish"
    };
    
    var peopleFishAnim = lottie.loadAnimation(peopleFish);
    var fishAnim = lottie.loadAnimation(fish);
    peopleFishAnim.play();

    $('#btnfish').hover(function(){
        $('#btnfish').css('cursor','help');
        fishAnim.play();
    },function(){
        fishAnim.stop();
    })


});
