export class Manager1 {
    constructor(code, name, team) {
        this.empCode = code;
        this.name = name;
        this.team = team;
    }
    getSalary(empCode) {
        return empCode * this.team;
    }
}
