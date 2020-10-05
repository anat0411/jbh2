import { IEmployee } from "/Fullstack/Part 2/Typescript new class/9.2/employees/IEmployee";

export class Manager1 implements IEmployee {
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
