let scrollViewDiv; //可視內容
let scrollRealDiv; //實際內容
let scrollY; //滾動區域
let scrollYBar; //滑桿
let dotList; //換頁點List
let startY=0;
let distanceY=0;
let chooseslide = 1;

document.getElementById('slideshow1').addEventListener('mousemove', Slideshow);
document.getElementById('slideshow2').addEventListener('mousemove', Slideshow);
document.getElementById('slideshow3').addEventListener('mousemove', Slideshow);
document.getElementById('slideshow4').addEventListener('mousemove', Slideshow);
document.getElementById('slideshow5').addEventListener('mousemove', Slideshow);

function Slideshow(){
    switch(this.id){
        case 'slideshow1':
            chooseslide = 1;
            document.getElementById('slideshow1').removeEventListener('mousemove', Slideshow);
            document.getElementById('slideshow2').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow3').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow4').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow5').addEventListener('mousemove', Slideshow);
            break;        
        case 'slideshow2':
            chooseslide = 2;
            document.getElementById('slideshow2').removeEventListener('mousemove', Slideshow);
            document.getElementById('slideshow1').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow3').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow4').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow5').addEventListener('mousemove', Slideshow);
            break;                
        case 'slideshow3':
            chooseslide = 3;
            document.getElementById('slideshow3').removeEventListener('mousemove', Slideshow);
            document.getElementById('slideshow1').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow2').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow4').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow5').addEventListener('mousemove', Slideshow);
            break;    
        case 'slideshow4':
            chooseslide = 4;
            document.getElementById('slideshow4').removeEventListener('mousemove', Slideshow);
            document.getElementById('slideshow1').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow2').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow3').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow5').addEventListener('mousemove', Slideshow);
            break;                
        case 'slideshow5':
            chooseslide = 5;
            document.getElementById('slideshow5').removeEventListener('mousemove', Slideshow);
            document.getElementById('slideshow1').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow2').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow3').addEventListener('mousemove', Slideshow);
            document.getElementById('slideshow4').addEventListener('mousemove', Slideshow);
            break;
    }
    Initial_Setting();
}

function Initial_Setting(){
    scrollViewDiv = document.getElementById('scroll-div-view'+chooseslide); //可視內容
    scrollRealDiv = document.getElementById('content'+chooseslide); //實際內容
    scrollY = document.getElementById('scroll-div-y-line'+chooseslide); //滾動區域
    scrollYBar = document.getElementById('scroll-div-y-bar'+chooseslide); //滑桿
    dotList = document.getElementsByClassName("dot"+chooseslide);
    scrollViewDiv.addEventListener('scroll', handleScroll);
    scrollY.addEventListener('mouseover', hoverSrollYBar);
}

function handleScroll(){
    const scrollValue = scrollViewDiv.scrollTop;
    //移動距離=滑桿可移動距離*內容實際移動距離/實際內容高度
    const distance = scrollY.clientHeight*scrollValue/(scrollRealDiv.clientHeight-scrollViewDiv.clientHeight+scrollYBar.clientHeight*5);
    $("#scroll-div-y-bar"+chooseslide).css("transform",`translate(-50%,${distance}px)`);
    BarColor();
    DotColor();
}

function hoverSrollYBar(){
    scrollYBar.addEventListener('mousedown', clickStart);
    scrollY.addEventListener('mouseout', hoverOutSroll);
}

function clickStart(el){
    startY = el.pageY;
    distanceY = scrollViewDiv.scrollTop;
    scrollY.removeEventListener('mouseout', hoverOutSroll);
    document.addEventListener('mousemove', moveScrollYBar);
    document.addEventListener('mouseup', clickEnd);
}

function moveScrollYBar(el){
    Ymove = el.pageY-startY;
    let change = Ymove*scrollRealDiv.clientHeight/scrollViewDiv.clientHeight;
    change+=distanceY;
    if(change<0){
        scrollViewDiv.scrollTop=0;
        return;
    }
    if(change+scrollViewDiv.clientHeight>scrollRealDiv.clientHeight){
        scrollViewDiv.scrollTop=scrollRealDiv.clientHeight-scrollViewDiv.clientHeight;
        return;
    }
    scrollViewDiv.scrollTop = change;
    BarColor();
}

function clickEnd(){
    document.removeEventListener('mousemove', moveScrollYBar);
    document.removeEventListener('mouseup', clickEnd);
}

function hoverOutSroll(){
    scrollYBar.removeEventListener('mousedown', clickStart);
    scrollY.removeEventListener('mouseout', hoverOutSroll);
}

function BarColor(){
    const changeLime = scrollRealDiv.clientHeight-scrollViewDiv.clientHeight;
    const whereNow = scrollViewDiv.scrollTop;
    if(changeLime/2>whereNow){
        const v = whereNow/(changeLime/2);
        const v2 = 1-v;
        document.getElementById('bar'+chooseslide+'-1').style.background = 'rgba(254, 231, 115,'+round(v2)+')';
        document.getElementById('bar'+chooseslide+'-1').style.boxShadow = '0 0 10px 5px rgba(254, 231, 115,'+round(v2)+')';
        document.getElementById('bar'+chooseslide+'-2').style.background = 'rgba(255,101,89,1)';
        document.getElementById('bar'+chooseslide+'-2').style.boxShadow = '0 0 10px 5px rgba(255,101,89,'+round(v)+')';
    }else{
        const v = (whereNow-(changeLime/2))/changeLime*2;
        const v2 = 1-v;
        document.getElementById('bar'+chooseslide+'-1').style.background = 'rgba(249,149,23,'+round(v)+')';
        document.getElementById('bar'+chooseslide+'-1').style.boxShadow = '0 0 10px 5px rgba(249,149,23,'+round(v)+')';
        document.getElementById('bar'+chooseslide+'-2').style.background = 'rgba(255,101,89,1)';
        document.getElementById('bar'+chooseslide+'-2').style.boxShadow = '0 0 10px 5px rgba(255,101,89,'+round(v2)+')';
    }
}

function clickDot(imgIndex){
    if(imgIndex<0){imgIndex=dotList.length-1;}
    if(imgIndex>(dotList.length-1)){imgIndex=0;}
    scrollViewDiv.scrollTo({top: (scrollRealDiv.clientHeight/dotList.length)*imgIndex, behavior: 'smooth'});
    DotColor();
}

function DotColor(){
    const imgheight = scrollRealDiv.clientHeight/dotList.length;
    const imgtoplime = imgheight/3*2;
    let index=0;
    if(scrollViewDiv.scrollTop<imgtoplime){
        index=0;
    }
    else if(imgtoplime<scrollViewDiv.scrollTop && scrollViewDiv.scrollTop<(imgtoplime+imgheight*1)){
        index=1;
    }
    else if((imgtoplime+imgheight*1)<scrollViewDiv.scrollTop && scrollViewDiv.scrollTop<(imgtoplime+imgheight*2)){
        index=2;
    }
    else if((imgtoplime+imgheight*2)<scrollViewDiv.scrollTop && scrollViewDiv.scrollTop<(imgtoplime+imgheight*3)){
        index=3;
    }
    else if((imgtoplime+imgheight*3)<scrollViewDiv.scrollTop && scrollViewDiv.scrollTop<(imgtoplime+imgheight*4)){
        index=4;
    }
    else if((imgtoplime+imgheight*4)<scrollViewDiv.scrollTop && scrollViewDiv.scrollTop<(imgtoplime+imgheight*5)){
        index=5;
    }

    for(let i=0;i<dotList.length;i++){
        dotList[i].style.background = "rgba(255, 255, 255, 0.5)";
    }
    dotList[index].style.background = "rgba(255, 255, 255, 1)";    
}

//四捨五入至小數點後一位
function round(num) {
    let m = Number((Math.abs(num) * 10).toPrecision(15));
    return Math.round(m) / 10 * Math.sign(num);
}