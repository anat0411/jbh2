export interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (num: number) => number;
}
