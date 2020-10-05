//basic
let x: number = 10;
let y: boolean = true;

let z: string = `NUMBER IS: ${x + 1}`;
z += "####";

function A(x: number): number {
  return x * 0.2;
}

console.log(A(100));

let list: number[] = [1, 2, 3];
let num1 = list[0];

let a1: any = 10;
a1 = true;

enum Color {
  Red,
  Green,
  Blue
}

function doSomething(c: Color): number | String {
  let returnVal: number | String;
  if (c == Color.Blue) {
    returnVal = list[0];
  } else if (c == Color.Green) {
    returnVal = "[Green]";
  } else {
    returnVal = "[Blue]";
  }
  return returnVal;
}

function B(): [string, string] {
  let tup1: [string, string];
  tup1 = ["hello", "tupple"];
  return tup1;
}

//interface

//01 object interface
function printLabel(labeledObj: { label: string; level: number }) {
  console.log(labeledObj.label);
}

let obj = { name: "Moshe", title: "Dr.", label: "Dr. Moshe", level: 10 };
printLabel(obj);

//02 interface Type
interface labeledValue {
  label: string;
  level: number;
}

function printLabeledVal(lbl: labeledValue) {}

let obj2 = { label: "Dr", level: 5, name: "Israel Israeli" };
printLabeledVal(obj2);

let obj3: labeledValue;
obj3 = { label: "Ms", level: 7 };

class LabelClass implements labeledValue {
  label: string = "Dr";
  level: number = 5;
  name: string = "Moshe";
  constructor(lbl: string, lvl: number, name: string) {
    this.level = lvl;
    this.label = lbl;
    this.name = name;
  }
}

//implements checks if another class or object has several inner object
//for example, if the "level" was deleted from the class above, the vsc was calling an error

//

interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (num: number) => number;
}
//Employee must implement interface IEmployee signiture
class Employee implements IEmployee {
  empCode: number;
  name: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  getSalary(empCode: number): number {
    return empCode;
  }
}

class Manager implements IEmployee {
  empCode: number;
  name: string;
  team: number;

  constructor(code: number, name: string, team: number) {
    this.empCode = code;
    this.name = name;
    this.team = team;
  }

  getSalary(empCode: number): number {
    return empCode * this.team;
  }
}

let arrIEmployee: IEmployee[] = [];

let emp = new Employee(1, "Steve");
let mng = new Manager(1, "Bob", 5);
arrIEmployee.push(emp, mng);

for (let index = 0; index < arrIEmployee.length; index++) {
  arrIEmployee[index].getSalary(1000);
}
