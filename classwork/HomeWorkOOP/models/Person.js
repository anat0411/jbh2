function Person(name,age,phone){
    
    this.name = name;
    this.age = age;
    this.phone = phone;

    this.printData = function(){
        return this.name + ", " + this.age + " , " + this.phone;
    }
    this.hello = function(){
        return 'Hello';
    }
}
