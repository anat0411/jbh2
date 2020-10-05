import { Employee1 } from "./Employee.js";
import { Manager1 } from "./manager.js";

let em1: Employee1 = new Employee1(123, "Moshe");
let mn1: Manager1 = new Manager1(1234, "Mariam", 1);

console.log(mn1.getSalary(1000));
console.log(em1.getSalary(1000));
