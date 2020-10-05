enum customerTypeName {
  regular = 0,
  golden = 1,
  normal = 2
}

class Customer {
  id: string;
  name: string;
  customerType: customerTypeName;
  private cycle: number = 0; //only can be changed or get excces inside Class

  constructor(idVal: string, nameVal: string) {
    this.id = idVal;
    this.name = nameVal;
    this.customerType = customerTypeName.normal;
  }

  calculatePrice(num: number): number {
    let val = num * 1.17;
    console.log("Customer Calculate Price: " + val.toString());
    return val;
  }

  addToCycle(val: number) {
    this.cycle += val;
  }

  setCycle(num: number) {
    this.cycle = num;
  }

  get Cycle(): number {
    //geting the number after it was made private
    return this.cycle;
  }
  set Cycle(value: number) {
    //setting the value, then you can use it as a func
    if (value > 0) this.cycle = value;
  }
}

let customer1 = new Customer("1", "IBM");
customer1.Cycle = 10; //set, because the data wasn't kept anywhere

class goldCustomer extends Customer {
  private discount: number;
  constructor(idVal: string, nameVal: string, discountVal: number) {
    super(idVal, nameVal);
    this.discount = discountVal;
    this.customerType = customerTypeName.golden;
  }
  calculatePrice(num: number): number {
    let baseCalc = super.calculatePrice(num);
    let calcVal = baseCalc * this.discount;
    return calcVal;
  }
}

let customer2 = new Customer("1", "Philips");
customer2.addToCycle(1000);
customer2.addToCycle(2000);
var res2 = customer2.calculatePrice(100);
customer2.addToCycle(res2);
console.log(customer2.Cycle);

let customer3 = new goldCustomer("2", "Intel", 0.3);
let res3 = customer3.calculatePrice(100);
customer3.addToCycle(res3);
console.log(customer3.Cycle);
