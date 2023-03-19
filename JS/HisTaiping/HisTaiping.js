$(document).ready(function () {
    var treeAnim = {
        container: document.getElementById('tree'), // Required
        path: '/JSON/HisTaiping/第一層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "tree"
    };

    var peopleAnim = {
        container: document.getElementById('people'), // Required
        path: '/JSON/HisTaiping/第二層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "people"
    };

    var trainAnim = {
        container: document.getElementById('train'), // Required
        path: '/JSON/HisTaiping/第三層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "train"
    };

    var cityAnim = {
        container: document.getElementById('city'), // Required
        path: '/JSON/HisTaiping/第四層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "city"
    };

    var tree = lottie.loadAnimation(treeAnim);
    var people = lottie.loadAnimation(peopleAnim);
    var train = lottie.loadAnimation(trainAnim);
    var city = lottie.loadAnimation(cityAnim);


    $('#people').hover(function () {
        people.play();
    });
    $('#train').hover(function () {
        train.play();
    });
    $('#city').hover(function () {
        city.play();
    });

    var infoAnim = document.getElementsByClassName('treeInfoClass');
    var treeInfoArr = ["treeInfo1.json", "treeInfo2.json", "treeInfo3.json", "treeInfo4.json"];
    var infoContainer = [];
    for (var i = 0; i < infoAnim.length; i++) {
        var info = {
            container: infoAnim[i], // Required
            path: '/JSON/HisTaiping/' + treeInfoArr[i], // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "treeInfo"
        }
        infoContainer[i] = info;
    }
    var tree1 = lottie.loadAnimation(infoContainer[0]);
    var tree2 = lottie.loadAnimation(infoContainer[1]);
    var tree3 = lottie.loadAnimation(infoContainer[2]);
    var tree4 = lottie.loadAnimation(infoContainer[3]);

    $('#treebot').hover(function () {
        console.log("run");
        tree.play();

        setTimeout(function(){
            $('#treebot').css('display','none');
            $('.treeClass').hover(function () {
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
                }
            }, function () {
                tree1.stop();
                tree2.stop();
                tree3.stop(); 
                tree4.stop();
            })
        },1000);
    });





});