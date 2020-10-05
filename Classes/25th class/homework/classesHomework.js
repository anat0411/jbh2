var newName = "The Name Is: ";
var newEmail = ". The Email Is: ";
var newAge = ". The Age Is: ";
var newPhone = ". The Phone Is: ";

function getBasicData(name, email, age, phone) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.phone = phone;

  return (
    newName +
    this.name +
    newEmail +
    this.email +
    newAge +
    this.age +
    newPhone +
    this.phone
  );
}

function Person(name, email, age, phone) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.phone = phone;

  this.getData = function() {
    return getBasicData(name, email, age, phone);
  };
}

function Teacher(name, email, age, phone, salary) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.phone = phone;
  this.salary = salary;

  this.getData = function() {
    return (
      getBasicData(name, email, age, phone, salary) +
      ". The Salary Is: " +
      this.salary
    );
  };
}

function Student(name, email, age, phone, grade_math, grade_english) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.phone = phone;
  this.grade_math = grade_math;
  this.grade_english = grade_english;

  this.getData = function() {
    return (
      getBasicData(name, email, age, phone) +
      ". The Math Grade Is: " +
      this.grade_math +
      ". The English Grade Is: " +
      this.grade_english
    );
  };
}

var person1 = new Person("Omer", "omer@gmail.com", 20, "0568976543");
var person2 = new Person("Ron", "ron@gmail.com", 30, "0545647654");

var teacher1 = new Teacher("Omera", "omera@gmail.com", 21, "0557654345", 6000);
var teacher2 = new Teacher("Rona", "rona@gmail.com", 31, "0523454321", 7000);

var student1 = new Student("John", "john@gmail.com", 22, "0539874345", 87, 90);
var student2 = new Student(
  "George",
  "george@gmail.com",
  23,
  "0523987621",
  100,
  75
);

console.log(person1.getData());
console.log(person2.getData());
console.log(teacher1.getData());
console.log(teacher2.getData());
console.log(student1.getData());
console.log(student2.getData());
