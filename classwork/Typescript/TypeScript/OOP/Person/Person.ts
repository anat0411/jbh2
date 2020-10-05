class Person{
    private name: String;
    public age: Number;
    public phone: String;
    constructor(name:String,age:Number,phone:String){
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    public printAllData():String{
        this.callInnerFunction();
        return `${this.name} ${this.age} ${this.phone}`;
    }
    private callInnerFunction():void{
        console.log( "Inner Function Triggerd" );
    }

    protected callProtectedFunction():String{
        return "Protected Run!";
    }
}

class Student extends Person{
    private grade_eng:Number;
    private grade_math:Number;

    constructor(grade_eng:Number,grade_math:Number,name:String,age:Number,phone:String){
        super(name,age,phone);
        this.grade_eng = grade_eng;
        this.grade_math = grade_math;
    }

    private printGrades():String{
        this.callProtectedFunction();
        return `{ ENG: ${this.grade_eng}, Math: ${this.grade_math}}`;
    }

    public printData():String{
        return this.printAllData() + " " +  this.printGrades();
    }
}



var p = new Person("Saar",37,"0525252555");
//console.log( p.name ); Error!! Name is Private Field
console.log( p.printAllData() );

var s = new Student(88,99,"Dan",50,"050205025150");
console.log(s.printData());



