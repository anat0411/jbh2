function Teacher(name,age,phone,salary,job_position){
    
    // this.name = name;
    // this.age = age;
    // this.phone = phone;
    // You Are Also Person
    Person.call(this, name,age,phone);
    this.salary = salary;
    this.job_position = job_position;

    this.printData = function(){
        return this.name + ", " + this.age + " , " + this.phone + ", " + this.salary + " , " + this.job_position;
    }
}