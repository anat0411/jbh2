window.onload = function(){
    init();
}

function init(){
    var p1 = new Person('Dani',55,'050252555');
    console.log(p1.printData());

    var t1 = new Teacher('Dana',30,'050252555',10000,'CTO');
    console.log(t1.printData());

    var w1 = new Student('Saar',25,'050252555','A3',95,100);
    console.log(w1.printData());

    console.log( t1.hello() );
    console.log( w1.hello() );

}


