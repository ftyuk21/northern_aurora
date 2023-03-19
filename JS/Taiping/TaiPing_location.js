$(document).ready(function () {
    var TaiLocalList = document.getElementsByClassName('loc');
    for(let i=0;i<TaiLocalList.length;i++){
        var loc = {
            container: document.getElementById(TaiLocalList[i].id), // Required
            path: '/JSON/common/地標1.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "loc"+(i+1)
        };
        lottie.loadAnimation(loc);
    }

    $('.loc').hover(function () {
        //hover進行時
        let num = this.id.slice(-1);
        $('#'+this.id+' > svg > g').css('transform','scale(4) translate(-36%,-35%)');
        $('#loc_txt'+num).css('visibility','visible');
    }, function () {
        //hover結束後
        let num = this.id.slice(-1);
        $('#'+this.id+' > svg > g').css('transform','scale(3.5) translate(-36%,-35%)');
        $('#loc_txt'+num).css('visibility','hidden');
    });
});
