function A(a, b) {
  return a + b;
}

let a = A(1, 2);
let b = A(2, 5);
console.log(a, b);

//You can write also

let arrowFunc = (a, b) => {
  return a + b;
};

let c = arrowFunc(4, 6);
console.log(c);

let C = () => {
  console.log("C");
};

let D = a => "[---" + a + "---]";
let d1 = D("XXX");

function E(a, callBackFunc) {
  console.log(a);
  console.log("Before Execution CallbackFunc");
  callBackFunc(a);
  console.log("After Execution CallbackFunc");
}

E(3, function(param) {
  console.log("Inside Callback " + param);
});

function MyFunc(param) {
  console.log("MyFunc " + param);
}

E("param1", MyFunc);
E("param2", a => {
  console.log("(a)=>");
});

E("param3", function(param) {
  console.log("function(param)");
});

E("param4", a => console.log(a));

const car = {
  model: "Fiesta",
  manufactor: "Ford",
  fullName: () => {
    return `${this.manufactor} " " + ${this.model}`;
  }
};

console.log(car.fullName);
