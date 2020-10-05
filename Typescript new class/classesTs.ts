class Vendor {
  //Field
  name: string;
  //Constructor
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    return "Htllo, welcome to " + this.name;
  }
}
const v1 = new Vendor("DFF DDD GGG");
console.log(v1.greet());
v1.name;
