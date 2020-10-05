"use strict";
//basic
var x = 10;
var y = true;
var z = "NUMBER IS: " + (x + 1);
z += "####";
function A(x) {
    return x * 0.2;
}
console.log(A(100));
var list = [1, 2, 3];
var num1 = list[0];
var a1 = 10;
a1 = true;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function doSomething(c) {
    var returnVal;
    if (c == Color.Blue) {
        returnVal = list[0];
    }
    else if (c == Color.Green) {
        returnVal = "[Green]";
    }
    else {
        returnVal = "[Blue]";
    }
    return returnVal;
}
function B() {
    var tup1;
    tup1 = ["hello", "tupple"];
    return tup1;
}
//interface
//01 object interface
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var obj = { name: "Moshe", title: "Dr.", label: "Dr. Moshe", level: 10 };
printLabel(obj);
function printLabeledVal(lbl) { }
var obj2 = { label: "Dr", level: 5, name: "Israel Israeli" };
printLabeledVal(obj2);
var obj3;
obj3 = { label: "Ms", level: 7 };
var LabelClass = /** @class */ (function () {
    function LabelClass(lbl, lvl, name) {
        this.label = "Dr";
        this.level = 5;
        this.name = "Moshe";
        this.level = lvl;
        this.label = lbl;
        this.name = name;
    }
    return LabelClass;
}());
//Employee must implement interface IEmployee signiture
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return empCode;
    };
    return Employee;
}());
var Manager = /** @class */ (function () {
    function Manager(code, name, team) {
        this.empCode = code;
        this.name = name;
        this.team = team;
    }
    Manager.prototype.getSalary = function (empCode) {
        return empCode * this.team;
    };
    return Manager;
}());
var arrIEmployee = [];
var emp = new Employee(1, "Steve");
var mng = new Manager(1, "Bob", 5);
arrIEmployee.push(emp, mng);
for (var index = 0; index < arrIEmployee.length; index++) {
    arrIEmployee[index].getSalary(1000);
}
//# sourceMappingURL=app.js.map