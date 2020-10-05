function Person(name,age,phone){
    
    this.name = name;
    this.age = age;
    this.phone = phone;

    this.printData = function(){
        return this.name + ", " + this.age + " , " + this.phone;
    }
    this.hello = function(){
        return 'Hello';
    }
}

function Student(name,age,phone,_class,grade_math,grade_english){
    
    // this.name = name;
    // this.age = age;
    // this.phone = phone;
    // You Are Also Person
    Person.call(this, name,age,phone);
    this._class = _class;
    this.grade_math = grade_math;
    this.grade_english = grade_english;

    this.printData = function(){
        return this.name + ", " + this.age + " , " + this.phone + " , " + this._class + ", " + this.grade_math + " , " + this.grade_english;
    }
}

function Teacher(name,age,phone,salary,job_position){
    
    // this.name = name;
    // this.age = age;
    // this.phone = phone;
    // You Are Also Person
    Person.call(this, name,age,phone);
    this.salary = salary;
    this.job_position = job_position;

    this.printData = function(){
        return this.name + ", " + this.age + " , " + this.phone + ", " + this.salary + " , " + this.job_position;
    }
}


var p = new Person("bla",37,"0502525255");
console.log( p.printData());
console.log( p.kids );
Person.prototype.kids = ["or","adam"];
Teacher.prototype = Object.create( Person.prototype);

console.log( p.kids );
var t = new Teacher("bla",37,"0502525255",50000,"CEO");
console.log( t.printData());
console.log( t.kids);
