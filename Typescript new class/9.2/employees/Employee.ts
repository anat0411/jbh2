import { IEmployee } from "/Fullstack/Part 2/Typescript new class/9.2/employees/IEmployee";

export class Employee1 implements IEmployee {
  empCode: number;
  name: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  getSalary(empCode: number): number {
    return 2000;
  }
}
