

  
$(document).ready(function () {

    var anim = document.getElementById("people");
    var peo = {
        container: document.getElementById('people'), // Required
        path: '/JSON/HisTaiping/第二層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "people_dev"
    }
    
    var people = lottie.loadAnimation(peo);
   

    $('#peoplein').hover(function(){        
        people.play();
    },function(){
        people.stop();})
    

    
})

    
