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