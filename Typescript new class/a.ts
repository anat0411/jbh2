function add(a: number, b: number): number {
  console.log(a);
  console.log(b);
  console.log(a + b);
  return a + b;
}

var res: number = add(5, 10);

let idDone: boolean = false;

let decimal: number = 6;

let color: string = "blue";
color = "red";

let colorText: string = decimal + " " + color;

let list: number[] = [1, 2, 3];

let list1: Array<number> = [4, 5, 6];

let tup: [string, number];
tup = ["tuptup", 2];

enum Color {
  Red,
  Green,
  Blue
}

let c1: Color = Color.Green;

let notSure: any = "ABC";
notSure = 5;
