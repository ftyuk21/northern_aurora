$(document).ready(function () {

    var anim = document.getElementById("city");
    var ct = {
        container: document.getElementById('city'), // Required
        path: '/JSON/HisTaiping/第四層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "city_dev"
    }
    
    var city = lottie.loadAnimation(ct);
   

    city.play();
    

    
})