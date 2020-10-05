window.onload = function(){
    init();
}

function init(){
    var whale = new Whale(250,25,{x:20,y:50},{width:55,height:25});
    console.log( whale.printData());

    var whale2 = new Whale(280,25,{x:88,y:36},{width:80,height:40});
    console.log( whale2.printData());

    var shark = new Shark(150,11,{x:0,y:26},30);
    console.log( shark.printData());

    var shark2 = new Shark(130,5,{x:8,y:15},30);
    console.log( shark2.printData());

    shark2.swim();
    console.log( shark2.printData());
    shark2.swim();
    console.log( shark2.printData());
    shark2.swim();
    console.log( shark2.printData());
    shark2.swim();
    console.log( shark2.printData());

    whale.swim();
    console.log( whale.printData());
    whale.swim();
    console.log( whale.printData());
    whale.swim();
    console.log( whale.printData());
    whale.swim();
    console.log( whale.printData());

}