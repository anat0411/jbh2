var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    Person.prototype.printAllData = function () {
        this.callInnerFunction();
        return this.name + " " + this.age + " " + this.phone;
    };
    Person.prototype.callInnerFunction = function () {
        console.log("Inner Function Triggerd");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(grade_eng, grade_math, name, age, phone) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.grade_eng = grade_eng;
        _this.grade_math = grade_math;
        return _this;
    }
    Student.prototype.printGrades = function () {
        return "{ ENG: " + this.grade_eng + ", Math: " + this.grade_math + "}";
    };
    Student.prototype.printData = function () {
        return this.printAllData() + " " + this.printGrades();
    };
    return Student;
}(Person));
var p = new Person("Saar", 37, "0525252555");
//console.log( p.name ); Error!! Name is Private Field
console.log(p.printAllData());
var s = new Student(88, 99, "Dan", 50, "050205025150");
console.log(s.printData());
