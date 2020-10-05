function Person(){
    var self = this;
    self.name = "saar";
    self.age = 30;

    self.PrintData = function(){
        return self.name + " - " + self.age;
    }
}

var p = new Person();
p.name = "Bla Bla";
console.log( p.PrintData() );
var p2 = new Person();
p2.name = "Bla Bla 2";
console.log( p2.PrintData() );
var p3 = new Person();
p3.name = "Bla Bla 3";
console.log( p3.PrintData() );

Person.prototype.car = "BMW";
Person.prototype.PrintData2 = function(){
    return this.name + " - " + this.age + " - " + this.car;
}
console.log( p.car,p3.car,p2.car );
console.log(p.PrintData2());
console.log(p2.PrintData2());
console.log(p3.PrintData2());

var p4 = new Person();
console.log(p4.PrintData2());
p4.car = "Volvo";
console.log(p4.PrintData2());
console.log(p3.PrintData2());


