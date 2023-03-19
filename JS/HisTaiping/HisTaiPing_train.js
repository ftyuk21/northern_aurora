  
$(document).ready(function () {

    var anim = document.getElementById("train");
    var tra = {
        container: document.getElementById('train'), // Required
        path: '/JSON/HisTaiping/第三層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "trans_dev"
    }
    
    var train = lottie.loadAnimation(tra);
   

    train.play();
    

    
})
